import { Link } from "gatsby";
import React from "react";
import { useCategoryList } from '../hooks/useCategoryList';

function CategoryProduct({ category }) {
  return (
    <>
      <Link to={`/categories/${category.url_key}`}>
        <h2>{category.name}</h2>
      </Link>
    </>
  );
}

export default function CategoryList() {
  const categories = useCategoryList();

  return (
    <div>
      {categories.map((category) => (
        <CategoryProduct key={category.id} category={category} />
      ))}
    </div>
  );
}
