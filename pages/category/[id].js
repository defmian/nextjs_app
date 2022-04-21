import Head from "next/head";
import { request } from "../../lib/datocms";
import { responsiveImageFragment } from "../../lib/fragments";
import { useQuerySubscription } from "react-datocms";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import CategoriesSelect from "../../components/CategoriesSelect";
import Header from "../../components/Header";
import PostByCategories from "../../components/PostByCategories";

// This function gets called at build time
export async function getStaticPaths() {
  const data = await request({ query: `{allCategories {id}}` });
  // Get the paths we want to pre-render based on post
  return {
    paths: data.allCategories.map((path) => `/category/${path.id}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PostBySlug($id: ItemId) {
        allPosts(filter: {category: {eq: $id}}) {
          title
          slug
          excerpt
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w:700, h:600}) {
              ...responsiveImageFragment
            }
          }
          category {
              name
              id
            }
        }

        otherCategories: allCategories(filter: {id: {neq: $id}}) {
            id
            slug
            name
            excerpt
            categoryImage {
                responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
              }
            }
         }

         categoryHeader: allCategories(filter: {id: {eq: $id}}) {
             name
          }
      }

      ${responsiveImageFragment}
         `,
    preview,
    variables: {
      id: params.id,
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

export default function CategoryPage({ subscription }) {
  const {
    data: { allPosts, otherCategories, categoryHeader },
  } = useQuerySubscription(subscription);

  return (
    <>
      <Layout>
        <Head>
          <title>{`Categories - Cannon Tech Blog`}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-accent-1 pt-20">
          <Container>
            <Header>Categories</Header>
            <CategoriesSelect categories={otherCategories} />
          </Container>
        </div>
        <Container>
          <div className="py-24">
            <h3 className="inline-block py-4 text-3xl font-normal leading-8 text-accent-3">{`Article > `}</h3>
            <h3 className="inline-block py-4 px-2 text-3xl font-bold text-gray-900 leading-8">
              {categoryHeader[0].name}
            </h3>
          <PostByCategories allPosts={allPosts} />
          </div>
        </Container>
      </Layout>
    </>
  );
}
