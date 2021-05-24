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
    <div>
      <Head>
        <title>Contact - Cannon Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-16 lg:h-screen bg-accent-1 text-gray-50 ">
        <Container>
          <Header>Contact form</Header>
          <div className="flex flex-col lg:flex-row items-center justify-around">
            {/* Left col */}
            <div className="w-full lg:w-1/2 lg:pr-12  pb-12 lg:pb-40 md:items-end text-left order-2 lg:order-1">
              <p className="pt-12 pb-8 font-extralight text-left text-lg leading-9">
                Let me know about your idea for interesting article
              </p>
              {/* start  */}
              <ContactForm />
              {/* end  */}
            </div>
            {/* Right col  */}
            <div className="w-1/2 pt-10 order-1 lg:order-2">
              <Image data={data.upload.responsiveImage} alt="picture contact" />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
