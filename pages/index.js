import Head from "next/head";
import { blogPosts } from "../lib/data";
import { request } from "../lib/datocms";
import App from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/datocms";

export default function Home({ data }) {
  return (
    <div className="container">
      <Head>
        <title>My blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main>
        <h1 className="">
          Welcome to my new blog about new technologies and programming
          languages. I hope you will enjoy reading and you find something for yourself.
        </h1>
        <div>
          {blogPosts.map((post) => (
            <BlogItem key={post.slug} {...post} />
          ))}
        </div>
      </main> */}
    </div>
  );
}

function BlogItem({ slug, title, content, date }) {
  return (
    <div className="border-gray-200 rounded-lg border-2 shadow-sm p-4 mb-8">
      <div className="font-bold text-2xl ">
        <Link href={`/blog/${slug}`}>
          <a className="text-gray-800">{title}</a>
        </Link>
      </div>
      <div className="text-xs inline font-light antialiased ">
        {date.toDateString()}
      </div>
      <div className="">{content}</div>
    </div>
  );
}
export async function getServerSideProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) || [];

  console.log({ allPosts });
  return {
    props: { allPosts },
  };
}
