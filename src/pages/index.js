import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import ProductList from '../components/ProductList';
// markup
const IndexPage = ({ data }) => {
  console.log({data})
  const products = data.products.nodes;

  return (
    <main>
      <title>Produkt Übersicht</title>
      <ProductList products={products} />
    </main>
  )
}

export default IndexPage


export const query = graphql`
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
`;