import { graphql, useStaticQuery } from "gatsby";

export const useProductList = () => {
  const { products } = useStaticQuery(
    graphql`
      query ProductQuery {
        products: allMagentoProduct {
          nodes {
            url_key
            sku
            name
            id
            price {
              regularPrice {
                amount {
                  currency
                  value
                }
              }
            }
          }
        }
      }
    `
  );

  return products.nodes;
};
