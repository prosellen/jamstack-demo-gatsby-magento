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
          graphqlEndpoint: "http://master-7rqtwti-i7oni76omjsny.eu-4.magentosite.cloud/graphql",
          // graphqlEndpoint: "https://master-7rqtwti-i7oni76omjsny.eu-4.magentosite.cloud/graphql",            
      }
    }
  ],
};
