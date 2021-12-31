import { graphql } from "gatsby";
import React from "react";

export default function SingleCategoryPage({ data }) {
  const { name, id } = data.magentoCategory;
  return (
    <div>
      <h1>{name}</h1>
      <div>{id}</div>
    </div>
  );
}

export const query = graphql`
  query ($urlKey: String!) {
    magentoCategory(url_key: { eq: $urlKey }) {
      name
      id
    }
  }
`;
