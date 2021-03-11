import Head from "next/head";
// import { blogPosts } from "../lib/data";
import { request } from "../lib/datocms";
import App from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/datocms";
import { Image } from "next/image";
// import Header from "../components/Header";

export default function Home({ allPosts }) {
  return (
    <div className="container">
      <Head>
        <title>My blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="my-5">
          Welcome to my new blog about new technologies and programming
          languages. I hope you will enjoy reading and you find something for
          yourself.
        </h1>
        <Header />
        <div>
          {allPosts.map((post) => (
            <BlogItem key={post.slug} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}

function BlogItem({ slug, header, paragraph, date }) {
  return (
    <div className="border-gray-200 rounded-lg border-2 shadow-sm p-4 mb-8">
      <div className="font-bold text-2xl ">
        <Link href={`/blog/${slug}`}>
          <a className="text-gray-800">{header}</a>
        </Link>
      </div>
      <div className="text-sm inline font-light antialiased">{date}</div>
      <div className="">{excerptPostContent(paragraph)}</div>
    </div>
  );
}

function excerptPostContent(paragraph) {
  return paragraph.length > 200
    ? paragraph.substring(0, 200) + "..."
    : paragraph;
}

export async function getServerSideProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) || [];
  return {
    props: { allPosts },
  };
}
