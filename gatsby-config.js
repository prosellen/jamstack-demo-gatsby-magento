module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "jamstack-demo-gatsby-magento",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-magento2",
      options: {
        graphqlEndpoint:
          "http://master-7rqtwti-i7oni76omjsny.eu-4.magentosite.cloud/graphql",
        // graphqlEndpoint: "https://master-7rqtwti-i7oni76omjsny.eu-4.magentosite.cloud/graphql",

        queries: {
          // Make sure to only get 5 products from Magento during development
          allProductsQuery: `\nquery {\n  products (\n    search: ""\n    pageSize: 5\n  ) {\n    items {\n      id\n      sku\n      name\n      updated_at\n\n      type_id\n      __typename\n\n      description {\n        html\n      }\n      \n      short_description {\n        html\n      }\n      \n      meta_title\n      meta_keyword\n      meta_description\n      \n      image {\n        label\n        url\n      }\n      \n      media_gallery {\n        url\n        label\n        position\n      }\n\n      url_key\n      \n      new_to_date\n      new_from_date\n      special_price\n      \n      price_tiers {\n        discount {\n          amount_off\n          percent_off\n        }\n        \n        final_price {\n          currency\n          value\n        }\n        \n        quantity\n      }\n            \n      categories {\n        id\n        name\n        url_path\n      }\n\n      ... on ConfigurableProduct {\n        configurable_options {\n          attribute_id          \n          attribute_code          \n          label\n          values {\n            label\n            value_index\n          }\n        }\n      }\n      \n      ... on GroupedProduct {\n        items {\n          position\n          qty\n          product {\n            sku\n            __typename\n          }\n        }\n      }\n      \n      ... on BundleProduct {\n        items {\n          option_id\n          options {\n            id\n            label\n            position\n            price\n            price_type\n            product {\n              sku\n              __typename\n            }\n            \n            can_change_quantity\n            is_default          \n          }\n        }\n      }\n      \n      price {\n        regularPrice {\n          adjustments {\n            amount {\n              currency\n              value\n            }\n          }\n          amount {\n            currency\n            value\n          }\n        }\n\n        maximalPrice {\n          adjustments {\n            amount {\n              currency\n              value\n            }\n          }\n          amount {\n            currency\n            value\n          }\n        }\n        \n        minimalPrice {\n          adjustments {\n            amount {\n              currency\n              value\n            }\n          }\n          amount {\n            currency\n            value\n          }\n        }\n      }\n    }\n  }\n}\n`,
          // see example query in src/nodes/queries/categories.js
          // categoryQuery: `... custom GraphQL query for fetching all the categories & product ids ...`,
        },
      },
    },
  ],
};
