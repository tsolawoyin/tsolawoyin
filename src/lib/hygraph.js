// lib/hygraph.js
import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HYGRAPH_ENDPOINT;

// Create client WITHOUT authorization header for public content
export const client = new GraphQLClient(endpoint);

// Query function
export async function getPost(slug) {
  const query = `
    query MyQuery {
  post(where: {slug: "recte-sapere-fons"}) {
    content {
      html
    }
    title
    summary
  }
}
  `;

  const variables = { slug };
  const data = await client.request(query, variables);
  return data.post;
}
