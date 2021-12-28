async function turnProductsIntoPages({ graphql, actions }) {
  // Get the template for this page
  const productTemplate = path.resolve('./src/templates/SingleProductPage.jsx');

  // Query all recipes
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

  // Loop over each recipes and create a page for each recipe
  data.products.nodes.forEach((product) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `products/${product.url_key}`,
      component: productTemplate,
      context: {
        urlKey: product.url_key,
      },
    });
  });
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  // Get the template for this page
  const productTemplate = path.resolve('./src/templates/SingleProductPage.jsx');

  // Query all recipes
  const { data } = await graphql(`
    query {
      categories: allMagentoProduct {
        edges {
          node {
              magento_id
              url_key
              url_path
          }
        }
      }
    }
  `);

  // Loop over each recipes and create a page for each recipe
  data.categories.nodes.forEach((category) => {
    actions.createPage({
      path: `categories/${category.url_key}`,
      component: productTemplate,
      context: {
          category_id: node.magento_id,
          url_key: node.url_key,
      },
    });

    const dstCategory = {
      ...node,
      id: node.magento_id,
    };

    delete dstCategory.magento_id;
  });
}

exports.createPages = (params) => {
   await Promise.all([turnProductsIntoPages(params), turnCategoriesIntoPages(params)]);
};