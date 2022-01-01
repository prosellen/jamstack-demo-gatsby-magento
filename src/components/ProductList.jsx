import { Link } from "gatsby";
import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.url_key}`}>
        <h2>{product.name}</h2>
      </Link>
      <p>SKU: {product.sku}</p>
    </>
  );
};

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
