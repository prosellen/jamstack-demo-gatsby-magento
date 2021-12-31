import * as React from "react";
import CategoryList from "../../components/CategoryList";
// markup
const IndexPage = ({ data }) => {

  return (
    <main>
      <title>Category Overview</title>
      <CategoryList />
    </main>
  );
};

export default IndexPage;
