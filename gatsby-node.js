const path = require("path");

async function turnProductsIntoPages({ graphql, actions }) {
  // Get the template for this page
  const productTemplate = path.resolve("./src/templates/SingleProductPage.jsx");

  // Query all products from `turnProductsIntoPages`
  const { data } = await graphql(`
    query {
      products: allMagentoProduct {
        edges {
          node {
            url_key
          }
        }
      }
    }
  `);

  // Loop over all products and create a page for each one
  data.products.edges.forEach(({ node }) => {
    actions.createPage({
      path: `products/${node.url_key}`,
      component: productTemplate,
      context: {
        urlKey: node.url_key,
      },
    });
  });
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  // Get the template for this page
  const productTemplate = path.resolve(
    "./src/templates/SingleCategoryPage.jsx"
  );

  // Query all recipes
  const { data } = await graphql(`
    query {
      categories: allMagentoCategory {
        edges {
          node {
            url_key
            magento_id
          }
        }
      }
    }
  `);

  // Loop over each recipes and create a page for each recipe
  data.categories.edges.forEach(({ node }) => {
    actions.createPage({
      path: `categories/${node.url_key}`,
      component: productTemplate,
      context: {
        categoryId: node.magento_id,
        urlKey: node.url_key,
      },
    });

    const dstCategory = {
      ...node,
      id: node.magento_id,
    };

    delete dstCategory.magento_id;
  });
}

exports.createPages = async (params) => {
  await Promise.all([
    turnProductsIntoPages(params),
    turnCategoriesIntoPages(params),
  ]);
};
