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
    `query HomePage {
  allArticles {
    id
    header
    paragraph
    postImage {
      filename
      responsiveImage {
        src
      }
    }
  }
}
`,
    { preview }
  );
  return data?.allArticles;
}
