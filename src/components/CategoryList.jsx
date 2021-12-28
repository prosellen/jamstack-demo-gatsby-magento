import { Link } from "gatsby";
import React from "react";

function CategoryProduct({ category }) {
  return (
    <>
      <Link to={`/categories/${category.url_key}`}>
        <h2>{category.name}</h2>
      </Link>
    </>
  );
}

export default function CategoryList({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <CategoryProduct key={category.id} category={category} />
      ))}
    </div>
  );
}
