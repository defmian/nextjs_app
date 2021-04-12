import tiny from "tiny-json-http";

export async function request({ query, variables, preview }) {
  let endpoint = "https://graphql.datocms.com/";

  const { body } = await tiny.post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  });

  if (body.errors) {
    console.log("Something went wrong!");
    throw body.errors;
  }

  return body.data;
}

// const API_TOKEN = process.env.DATOCMS_API_TOKEN;
// const API_URL = "https://graphql.datocms.com/";
// export async function fetchAPI(query, { variables, preview } = {}) {
//   const response = await fetch(API_URL + (preview ? `/preview` : ""), {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_TOKEN}`,
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   });

//   const json = await response.json();
//   if (json.errors) {
//     throw new Error("Failed to fetch API");
//   }
//   return json.data;
// }

// const token = "c6786a6e549abe5547878ea42cf0c0";
// fetch("https://graphql.datocms.com/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Bearer ${token}`,
//   },
//   body: JSON.stringify({
//     query: "{ allPosts { title } }",
//   }),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// export const responsiveImageFragment = `
// fragment responsiveImageFragment on ResponsiveImage {
//     alt
//     title
//     src
//     srcSet
//     webpSrcSet
//     width
//     height
//     aspectRatio
//     base64
//     webpSrcSet
// }
// `;

// export async function getAllPosts(preview) {
//   const data = await fetchAPI(
//     `query BlogPage {
//     allPosts {
//     author
//     date
//     header
//     paragraph
//     slug
//     postImage {
//       responsiveImage {
//         src
//       }
//     }
//   }
// }

// `,
//     { preview }
//   );
//   return data?.allPosts;
// }

// export async function getBlogPost() {
//   const query = await fetchAPI(`query BlogPost {
//   allPosts {
//     slug
//     id
//     header
//     paragraph
//     date
//   }
// }
// `);

//   return query?.allPosts;
// }

// export async function getPostAndMorePost(slug) {
//   const query = await fetchAPI(
//     `
//     query getPostBySlug($slug: String) {
//       post(filter: {slug: $slug}) {
//       title
//       slug
//       date
//       paragraph
//       author {
//         name
//         picture {
//           url(imgixParams: {fm: jpg, fit: crop, h: 100, w: 100, sat: -100})
//         }
//       }
//       postImage {
//         responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000}) {
//           ...responsiveImageFragment
//         }
//       }
//   }

// }

// ${responsiveImageFragment}
// `
//   );
//   return data;
// }

// export async function getAllPostsWithSlug() {
//   const query = await fetchAPI(`{
//   allPosts {
//     slug
//   }
// }
// `);
//   return query?.allPosts;
// }

// get all Categories
// ----------------------------------------------------------------
// query here

// get article filter by caterogy
// ----------------------------------------------------------------
// query here

// get lead post for home page and recent for grid
// ----------------------------------------------------------------
// query here
