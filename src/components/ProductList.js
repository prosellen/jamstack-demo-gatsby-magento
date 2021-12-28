import React from 'react';
import { Link } from 'gatsby';

function SingleProduct({ product }) {
  return (
    <>
      <Link to={`/product/${product.url_key}`}>
        <h2>{product.name}</h2>
      </Link>
      <p>SKU: {product.sku}</p>
    </>
  );
}

export default function ProductList({ products }) {
  return (
    <div>
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
    </div>
  );
}
