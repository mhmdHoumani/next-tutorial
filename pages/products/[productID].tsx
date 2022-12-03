import { useRouter } from "next/router";
import React from "react";
import { Product } from ".";

const ProductInfo = ({ product }: { product: Product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading Details...</h1>;
  }

  return (
    <div>
      <h2 className="text-lg font-bold">
        {product.id + " " + product.title + " - " + product.price}
      </h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductInfo;

export async function getStaticProps(context: any) {
  const { params } = context;
  console.log(`REGENERATING THE PRODUCT ${params.productID} AFTER 10SEC`);
  const response = await fetch(
    `http://localhost:5050/products/${params.productID}`
  );
  const data: Product = await response.json();
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productID: "1" } }],
    fallback: true,
  };
}
