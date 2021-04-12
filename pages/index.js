import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Layout from "../components/Layout";

export async function getServerSideProps({ preview }) {
  const graphqlRequest = {
    query: `
    {
    allPosts {
        slug
        title
        paragraph
        date
        excerpt
      }
    }
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: true,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Index({ subscription }) {
  const {
    data: { allPosts, site, blog },
    error: connectionError,
    status: connetionStatus,
  } = useQuerySubscription(subscription);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  // const metaTags = blog.seo.concat(site.favicon);
  return (
    <>
      <Layout>
        <Head>
          <title>My blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className="my-5">
            {heroPost.title}
            Welcome to my new blog about new technologies and programming //
            languages. I hope you will enjoy reading and you find something for
            yourself.
          </h1>
          {/* <Header /> */}
          <div>
            <p>{heroPost.excerpt}</p>
          </div>
        </main>
      </Layout>
    </>
  );
}

// function BlogItem({ slug, title, excerpt, date }) {
//   return (
//     <div className="border-gray-200 rounded-lg border-2 shadow-sm p-4 mb-8">
//       <div className="font-bold text-2xl ">
//         <Link href={`/blog/${slug}`}>
//           <a className="text-gray-800">{title}</a>
//         </Link>
//       </div>
//       <div className="text-sm inline font-light antialiased">{date}</div>
//       <div className="">{excerpt}</div>
//     </div>
//   );
// }
