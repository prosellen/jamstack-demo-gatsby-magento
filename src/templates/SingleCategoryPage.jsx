import { graphql } from "gatsby";
import React from "react";

const SingleCategoryPage = ({ data }) => {
  const { name, id } = data.magentoCategory;
  return (
    <div>
      <h1>{name}</h1>
      <div>{id}</div>
    </div>
  );
};

export default SingleCategoryPage;

export const query = graphql`
  query ($urlKey: String!) {
    magentoCategory(url_key: { eq: $urlKey }) {
      name
      id
    }
  }
`;
