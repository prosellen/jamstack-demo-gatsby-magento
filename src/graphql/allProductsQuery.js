// Make sure to only get 5 products from Magento during development
const allProductsQuery = `
query {
  products (
    search: ""
    pageSize: 5
  ) {
    items {
      id
      sku
      name
      updated_at

      rating_summary
      stock_status

      type_id
      __typename

      description {
        html
      }

      short_description {
        html
      }

      meta_title
      meta_keyword
      meta_description

      image {
        label
        url
      }

      media_gallery {
        url
        label
        position
      }

      url_key

      new_to_date
      new_from_date
      special_price

      price_tiers {
        discount {
          amount_off
          percent_off
        }

        final_price {
          currency
          value
        }

        quantity
      }

      categories {
        id
        name
        url_path
      }

      ... on ConfigurableProduct {
        configurable_options {
          attribute_id
          attribute_code
          label
          values {
            label
            value_index
          }
        }
      }

      ... on GroupedProduct {
        items {
          position
          qty
          product {
            sku
            __typename
          }
        }
      }

      ... on BundleProduct {
        items {
          option_id
          options {
            id
            label
            position
            price
            price_type
            product {
              sku
              __typename
            }

            can_change_quantity
            is_default
          }
        }
      }

      price {
        regularPrice {
          adjustments {
            amount {
              currency
              value
            }
          }
          amount {
            currency
            value
          }
        }

        maximalPrice {
          adjustments {
            amount {
              currency
              value
            }
          }
          amount {
            currency
            value
          }
        }

        minimalPrice {
          adjustments {
            amount {
              currency
              value
            }
          }
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

module.exports = allProductsQuery;
