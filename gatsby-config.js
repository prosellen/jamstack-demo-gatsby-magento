const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

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
            graphqlEndpoint: process.env.MAGENTO_GRAPHQL_ENDPOINT,


            // // this is optional
            // queries: {
            //     // see example query in src/nodes/queries/products.js
            //     allProductsQuery: `... custom GraphQL query for fetching all the products you need to publish on Gatsby website ...`,
            //     // see example query in src/nodes/queries/categories.js
            //     categoryQuery: `... custom GraphQL query for fetching all the categories & product ids ...`
            // }
        }
    }
  ],
};
