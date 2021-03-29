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

export async function getLogoImage() {
  const query = await fetchAPI(`query GetLogo {
  allUploads(filter: {filename: {matches: {pattern: "logo"}}}) {
    url
    alt
    size
  }
}
`);

  return query?.allUploads;
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

export async function getAllPostsWithSlug() {
  const query = await fetchAPI(`{
  allPosts {
    slug
  }
}
`);
  return query?.allPosts;
}
