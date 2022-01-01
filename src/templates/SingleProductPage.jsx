import { graphql } from "gatsby";
import React from "react";

const SingleProductPage = ({ data }) => {
  const product = data.magentoProduct;
  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  );
};

export default SingleProductPage;

export const query = graphql`
  query ($urlKey: String!) {
    magentoProduct(url_key: { eq: $urlKey }) {
      id
      name
      sku
    }
  }
`;
