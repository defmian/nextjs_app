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

export default function Contact({data}) {
    return (
      <>
        <Layout>
          <Head>
            <title>Contact - Cannon Tech Blog</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="h-screen pt-4 lg:px-2 bg-accent-1 text-gray-50">
            <div className="px-8 lg:px-20 py-24 container mx-auto flex flex-col lg:flex-row  items-center justify-around">
              {/* Left col */}
              <div className="w-3/4 pb-12 lg:pb-40 items-center md:items-end text-center md:text-left">
                <Header>Contact form</Header>
                <p className="pt-12 pb-8 font-extralight text-justify text-lg leading-9 ">
                  Let me know about your idea for interesting article
                </p>
                {/* start  */}
                <div class="py-2">
                  <div className="max-w-md">
                    <div className="grid grid-cols-1 gap-6">
                      <label className="block pb-2">
                        <span className="text-gray-200 text-lg">Full name</span>
                        <input
                          type="text"
                          className="mt-0 pt-4 block w-full px-0.5 border-0 border-b-2 border-gray-600 bg-accent-1 focus:ring-0 focus:border-gray-100"
                          placeholder=""
                        />
                      </label>
                      <label className="block pb-2">
                        <span className="text-gray-200 text-lg">Email address</span>
                        <input
                          type="email"
                          className="mt-0 pt-4 block w-full px-0.5 border-0 border-b-2 border-gray-600 bg-accent-1 focus:ring-0 focus:border-gray-100"
                          placeholder="john@example.com"
                        />
                      </label>
                      <label className="block pb-2">
                        <span className="text-gray-200 text-lg">
                          What is the subject of the message?
                        </span>
                        <select className="block pt-4 w-full mt-0 px-0.5 border-0 border-b-2 border-gray-600 bg-accent-1 focus:ring-0 focus:border-gray-100">
                          <option>Article Idea</option>
                          <option>Business</option>
                          <option>Job</option>
                          <option>Other</option>
                        </select>
                      </label>
                      <label className="block pb-2">
                        <span className="text-gray-200 text-lg">Message</span>
                          <textarea
                          className="mt-0 block pt-4 w-full px-0.5 border-0 border-b-2 border-gray-600 bg-accent-1 focus:ring-0 focus:border-gray-100"
                          rows="2"
                          ></textarea>
                      </label>
                      <div className="block pb-2">
                        <div className="mt-2">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                className="border-gray-300 border-2 bg-accent-1 text-black focus:border-gray-300 focus:ring-black"
                              />
                              <span className="ml-2">
                                Email me news and special offers
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div> 
                     <div className="pt-12 text-center lg:text-right">
                    <button className="inline-block py-2 lg:py-3 px-9 border border-accent-5 hover:border-gray-200 bg-accent-1 uppercase text-xs lg:text-sm text-accent-5 active:scale-105 hover:text-accent-2 font-light  focus:outline-none transform transition duration-200 ease-in-out">
                      <a href="#">
                      Submit               
                      </a>
                    </button>
                    </div>
                  </div>
                </div>
                {/* end  */}
              </div>
              {/* Right col  */}
              <div className="lg:p-16 w-1/2 lg:w-full">
                <Image 
                  data={data.upload.responsiveImage}
                  alt="picture author"
                />
              </div>
            </div>
          </main>
        </Layout>
      </>
    );

}

