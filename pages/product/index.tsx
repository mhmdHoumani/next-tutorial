import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <Link href="/product/1">
          <li>Product 1</li>
        </Link>
        <Link href="/product/2">
          <li>Product 2</li>
        </Link>
        {/** replace: REPLACE THE PATH */}
        <Link href="/product/3" replace>
          <li>Product 3</li>
        </Link>
        <Link href="/product/4">
          <li>Product 4</li>
        </Link>
      </ul>
    </div>
  );
};

export default Product;
