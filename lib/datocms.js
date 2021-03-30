import { GraphQLClient } from "graphql-request";

const API_URL = `https://graphql.datocms.com/`;
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

async function fetchAPI(query, { variables, preview } = {}) {
  const response = await fetch(API_URL + (preview ? `/preview` : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export const responsiveImageFragment = `
fragment responsiveImageFragment on ResponsiveImage {
    alt
    title
    src
    srcSet
    webpSrcSet
    width
    height
    aspectRatio
    base64
    webpSrcSet
}
`;

export async function getAllPosts(preview) {
  const data = await fetchAPI(
    `query BlogPage {
  allPosts {
    author
    date
    header
    paragraph
    slug
    postImage {
      responsiveImage {
        src
      }
    }
  }
}

`,
    { preview }
  );
  return data?.allPosts;
}

export async function getBlogPost() {
  const query = await fetchAPI(`query BlogPost {
  allPosts {
    slug
    id
    header
    paragraph
    date
  }
}
`);

  return query?.allPosts;
}

export async function getPostAndMorePost(slug) {
  const query = await fetchAPI(
    `
    query getPostBySlug($slug: String) {
      post(filter: {slug: $slug}) {
      title
      slug
      date
      paragraph
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, h: 100, w: 100, sat: -100})
        }
      }
      postImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000}) {
          ...responsiveImageFragment
        }
      }
  }


}


${responsiveImageFragment}
`
  );
  return data;
}

export async function getAllPostsWithSlug() {
  const query = await fetchAPI(`{
  allPosts {
    slug
  }
}
`);
  return query?.allPosts;
}

// get all Categories
// ----------------------------------------------------------------
// query here

// get article filter by caterogy
// ----------------------------------------------------------------
// query here

// get lead post for home page and recent for grid
// ----------------------------------------------------------------
// query here
