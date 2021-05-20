import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { responsiveImageFragment } from "../lib/fragments";
import { request } from "../lib/datocms";
import { Image } from "react-datocms";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm";

export async function getStaticProps({}) {
  const graphqlRequest = {
    query: `
   query AboutMePic {
  upload(filter: {filename: {matches: {pattern: "brooke"}}}) {
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

export default function Contact({ data }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact - Cannon Tech Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="h-screen pt-4 lg:px-2 bg-accent-1 text-gray-50">
          <Container>
            <Header>Contact form</Header>
            <div className="flex flex-col lg:flex-row items-center justify-around">
              {/* Left col */}
              <div className="w-3/4 pb-12 lg:pb-40 items-center md:items-end text-center md:text-left">
                <p className="pt-12 pb-8 font-extralight text-justify text-lg leading-9 ">
                  Let me know about your idea for interesting article
                </p>
                {/* start  */}
                <ContactForm />
                {/* end  */}
              </div>
              {/* Right col  */}
              <div className="lg:p-16 w-1/2 lg:w-full">
                <Image
                  data={data.upload.responsiveImage}
                  alt="picture contact"
                />
              </div>
            </div>
          </Container>
        </main>
      </Layout>
    </>
  );
}
