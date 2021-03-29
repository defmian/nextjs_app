import Head from "next/head";
import { getBlogPost, getAllPostsWithSlug } from "../../lib/datocms";

// pages/blog/[slug].js
export default function BlogPost({ post }) {
  console.log(post);
  return (
    <div className="container">
      <Head>
        <title>{post.header}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{post.header}</h1>
        <div>{post.date}</div>
        <div>{post.paragraph}</div>
        <div className="bg-gray-500">
          <p>Test czy to w ogole dzialooo</p>
        </div>
      </main>
    </div>
  );
}

// This function gets called at build time
// it needs to define a list of paths that have to be rendered to html at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on post
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getBlogPost();

  return {
    props: {
      preview,
      post: {
        ...data.find((item) => item.slug === params.slug),
      },
      morePosts: data?.morePosts ?? [],
    },
  };
}
