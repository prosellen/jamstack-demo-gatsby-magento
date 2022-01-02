import { graphql } from "gatsby";
import React from "react";

const SingleProductTitle = ({ name }) => {
  return <h1>{name}</h1>;
};

const SingleProductInfoPrice = ({ stockStatus }) => {
  return (
    <div>
      <p>{stockStatus ? "IN STOCK" : "OUT OF STOCK"}</p>
    </div>
  );
};

const SingleProductReviewsSummary = ({ ratingSummary }) => {
  return (
    <div>
      <p>Rating: {ratingSummary}%</p>
    </div>
  );
};

const SingleProductPage = ({ data }) => {
  const product = data.magentoProduct;
  return (
    <div>
      <SingleProductTitle name={product.name} />
      <SingleProductReviewsSummary ratingSummary={product.rating_summary} />
      <SingleProductInfoPrice stockStatus={product.stock_status} />
    </div>
  );
};

export default SingleProductPage;

export const query = graphql`
  query ($urlKey: String!) {
    magentoProduct(url_key: { eq: $urlKey }) {
      configurable_options {
        values {
          label
          value_index
        }
        attribute_code
        attribute_id
        label
      }
      rating_summary
      stock_status
      name
      sku
      type_id
      meta_description
      meta_keyword
      meta_title
      media_gallery {
        label
        position
        url
      }
      image {
        url
      }
    }
  }
`;
