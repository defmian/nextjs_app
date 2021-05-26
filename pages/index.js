import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Layout from "../components/Layout";
import Container from "../components/Container";
import HeroPage from "../components/HeroPost";
import PostGrid from "../components/PostGrid";

export async function getServerSideProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        morePosts: allPosts(orderBy: date_DESC, skip:"1", first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h:800 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
         heroPost: allPosts(first: "1", orderBy: date_DESC) {          
               title
                slug
                excerpt
                date
                coverImage {
                        responsiveImage(imgixParams: {fm: jpg, fit: crop}) {
                          ...responsiveImageFragment
                        }
                      }
  }
    }
      ${metaTagsFragment}
      ${responsiveImageFragment}
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
    data: { morePosts, heroPost, site, blog },
    error: connectionError,
    status: connetionStatus,
  } = useQuerySubscription(subscription);

  const [heroPreview] = heroPost;
  return (
    <>
      <Layout>
        <Head>
          <title>Cannon Tech Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <HeroPage
            title={heroPreview.title}
            excerpt={heroPreview.excerpt}
            coverImage={heroPreview.coverImage}
            slug={heroPreview.slug}
            />
            <Container>
            <div className="py-24">
              <h3 className="py-4 text-3xl font-semibold leading-8">
                Trending articles
              </h3>
              {morePosts.length > 0 && <PostGrid posts={morePosts} />}
            </div>
          </Container>
        </main>
      </Layout>
    </>
  );
}

