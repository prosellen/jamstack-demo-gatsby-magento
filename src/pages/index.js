import { Link } from "gatsby";
import * as React from "react";
// markup
const IndexPage = () => {
  return (
    <main>
      <title>Produkt Übersicht</title>
      <Link to="/products" />
      <Link to="/categories" />
    </main>
  );
};

export default IndexPage;
