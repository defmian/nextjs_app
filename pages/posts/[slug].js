import Head from "next/head";
import {
  getBlogPost,
  getPostAndMorePost,
  getAllPostsWithSlug,
} from "../../lib/datocms";

// pages/posts/[slug].js
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

export async function getStaticProps({ params, preview = false }) {
  const dataPost = await getPostAndMorePost(params.slug);
  const data = await getBlogPost();
  return {
    props: {
      preview,
      post: {
        ...dataPost,

        // ...data.find((item) => item.slug === params.slug),
      },
      morePosts: data?.morePosts ?? [],
    },
  };
}
