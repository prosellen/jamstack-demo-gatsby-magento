import { graphql } from "gatsby";
import React from "react";

export default function SingleProductPage({ data }) {
  const product = data.magentoProduct;
  return (
    <>
      <div>
        <h2>{product.name}</h2>
      </div>
    </>
  );
}

export const query = graphql`
  query($urlKey: String!) {
    magentoProduct(url_key: { eq: $urlKey }) {
      id
      name
      sku
    }
  }
`;
