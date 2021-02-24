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
        <div>
          {blogPosts.map((post) => (
            <div key={post.slug}>
              <div>
                <Link href={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </div>
              <div>{post.date.toString()}</div>
              <div>{post.content}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
