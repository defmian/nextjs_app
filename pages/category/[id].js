import Head from "next/head"
import { request } from "../../lib/datocms";
import { responsiveImageFragment } from "../../lib/fragments";
import { useQuerySubscription } from "react-datocms";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import CategoriesSelect from "../../components/CategoriesSelect";
import Header from "../../components/Header";

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
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          category {
              name
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
      }

      ${responsiveImageFragment}
         `,
    preview,
    variables: {
      id: params.id,
    },
  };

  console.log(graphqlRequest)

  return {
    props: {
      subscription: {
        enabled: true,
        initialData: await request(graphqlRequest),
      },
    },
  };
}


export default function CategoryPage({subscription}) {

    const { data: {allPosts, otherCategories}} = useQuerySubscription(subscription);

    console.log(otherCategories);
    console.log(allPosts)

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
            <div className="p-20">
              <h3 className="inline-block py-4 text-3xl font-semibold leading-8 text-gray-600">{`Article > `}</h3>
              <h3 className="inline-block py-4 px-2 text-3xl font-semibold leading-8">
                {allPosts[0].category.name}
              </h3>
              <div className="">
              {/* //PostPreviewCategory  */}
              {allPosts.map((post) => (
                <div className="p-2">
                  <h1>{post.title}</h1>
                  <p>{post.excerpt}</p>
                </div>
              ))}

              </div>
            </div>
          </Container>
        </Layout>
      </>
    );
}