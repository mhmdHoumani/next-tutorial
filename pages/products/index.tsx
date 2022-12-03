import Link from "next/link";
import React from "react";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

const Products = ({ products }: { products: Product[] }) => {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => (
        <div key={product.id} className="p-4 shadow">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <h2 className="text-xl font-bold">{product.price}</h2>
          <p>{product.description}</p>
          <Link href={`/products/${product.id}`} legacyBehavior>
            <a className="text-blue-500 hover:text-blue-800 hover:underline">
              More Details
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Products;

export async function getStaticProps() {
  console.log("REGENERATING THE PRODUCTS AFTER 10SEC");
  const response = await fetch("http://localhost:5050/products");
  const data: Product[] = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
