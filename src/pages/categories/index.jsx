import { graphql } from "gatsby";
import * as React from "react";
import CategoryList from "../../components/CategoryList";
// markup
const IndexPage = ({ data }) => {
  const categories = data.categories.nodes;

  return (
    <main>
      <title>Category Overview</title>
      <CategoryList categories={categories} />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query CategoryQuery {
    categories: allMagentoCategory {
      nodes {
        url_key
        name
        level
        landing_page
        id
        parent_category_id
      }
    }
  }
`;
