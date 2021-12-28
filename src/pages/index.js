import { Link } from "gatsby";
import * as React from "react";
// markup
const IndexPage = ({ data }) => {
  console.log({data})
  const products = data.products.nodes;

  return (
    <main>
      <title>Produkt Übersicht</title>
      <Link to="/products" />
      <Link to="/categories" />
    </main>
  );
};

export default IndexPage;
