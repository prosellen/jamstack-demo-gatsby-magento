import React from 'react';
import { graphql } from 'gatsby';

export default function SingleProductPage({ data: { magentoProduct } }) {
  const product = data.magentoProduct
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
