import Head from "next/head";
import { blogPosts } from "../lib/data";

import App from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My blog!</h1>
        <div className="my-4">
          {blogPosts.map((post) => (
            <BlogItem key={post.slug} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}

function BlogItem({ slug, title, content, date }) {
  return (
    <div className="border-gray-200 rounded-lg border-2 shadow-sm">
      <div>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </div>
      <div className="text-sm antialiased ">{date.toDateString()}</div>
      <div>{content}</div>
    </div>
  );
}
