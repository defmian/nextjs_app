import Head from "next/head";
import { request } from "../../lib/datocms";
import { responsiveImageFragment } from "../../lib/fragments";
import { useQuerySubscription } from "react-datocms";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import PostInfo from "../../components/PostInfo";
import WrittenBy from "../../components/WrittenBy";

// This function gets called at build time
export async function getStaticPaths() {
  const data = await request({ query: `{allPosts {slug}}` });
  // Get the paths we want to pre-render based on post
  return {
    paths: data.allPosts.map((path) => `/posts/${path.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PostBySlug($slug: String) {
        post(filter: {slug: {eq: $slug}}) {
          title
          slug
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            aboutAuthor
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }

        morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            aboutAuthor
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
      }

      ${responsiveImageFragment}
         `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: {
        enabled: true,
        initialData: await request(graphqlRequest),
      },
    },
  };
}
// pages/posts/[slug].js
export default function BlogPost({ subscription }) {
  const {
    data: { post, morePosts },
  } = useQuerySubscription(subscription);

  return (
    <>
      <div>
        <Head>
          <title>{`${post.title} - Cannon Tech Blog`}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PostHeader title={post.title} headerImage={post.coverImage} />
      </div>
      <div className="p-8 container mx-auto">
        <PostInfo author={post.author.name} date={post.date} />{" "}
        <PostBody content={post.content} />
        <WrittenBy
          author={post.author.name}
          aboutAuthor={post.author.aboutAuthor}
          picture={post.author.picture}
        />
      </div>
    </>
  );
}
