import Head from "next/head";
import { blogPosts } from "../../lib/data";
import { getBlogPost } from "../../lib/datocms";

// pages/blog/[slug].js
export default function BlogPost({ title, date, content }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <div>{date}</div>
        <div>{content}</div>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on post
  return {
    paths: getBlogPost.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: getBlogPost.find((item) => item.slug === params.slug), // will be passed to the page component as props
  };
}
