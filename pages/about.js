import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { responsiveImageFragment } from "../lib/fragments";
import { request } from "../lib/datocms";
import { Image } from "react-datocms";

export async function getStaticProps({}) {
  const graphqlRequest = {
    query: `
   query AboutMePic {
  upload(filter: {filename: {matches: {pattern: "albert"}}}) {
    filename
    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 1500, fpY: "0.05"}) {
       ...responsiveImageFragment
  }
  }
}
  ${responsiveImageFragment}
    `,
  };

  return {
    props: {
      data: await request(graphqlRequest),
    },
  };
}

export default function About({ data }) {
  return (
    <>
      <Layout>
        <Head>
          <title>About me - Cannon Tech Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="h-screen pt-4 lg:px-2 bg-accent-1 text-gray-50">
          <div className="px-20 container mx-auto flex flex-col lg:flex-row justify-around">
            {/* Left col */}
            <div className="w-3/4 pt-48 items-center md:items-end text-center md:text-left">
              <Header>About me</Header>
              <p className="pt-12 pb-40 font-extralight text-justify text-lg leading-9 ">
                Hi! My name is Damian and I’m Junior React Front-End Developer.
                I love develop, design web and mobile application for startups,
                small and medium businesses. I’d love to work for you. If you
                want to watch my work, check out my github profil.
              </p>
              <button className="inline-block invisible md:visible py-2 lg:py-3 pl-4 pr-10 border border-accent-5 hover:border-gray-200 bg-accent-1 uppercase text-xs lg:text-sm text-accent-5 active:scale-105 hover:text-accent-2 font-light  focus:outline-none transform transition duration-200 ease-in-out">
                <a>
                  Check out
                  <div className="absolute right-2 top-1 lg:top-1/4">
                    {/* <ArrowRight fill="#B3B3B3" /> */}
                  </div>
                </a>
              </button>
            </div>
            {/* Right col  */}
            <div className="p-24 w-3/4 lg:w-full">
              <Image data={data.upload.responsiveImage} alt="picture author" />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
