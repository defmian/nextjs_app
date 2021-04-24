import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Layout from "../components/Layout";
import Container from "../components/Container";
import HeroPage from "../components/HeroPost";
import PostPreview from "../components/PostPreview";
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
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: scale, maxW: 585, maxH: 600 }) {
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
    data: { allPosts, site, blog },
    error: connectionError,
    status: connetionStatus,
  } = useQuerySubscription(subscription);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  // const metaTags = blog.seo.concat(site.favicon);
  return (
    <>
      <Layout className="">
        <Head>
          <title>CANNON TECH BLOG</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="">
          <HeroPage
            title={heroPost.title}
            excerpt={heroPost.excerpt}
            coverImage={heroPost.coverImage}
            slug={heroPost.slug}
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
