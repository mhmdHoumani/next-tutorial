import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();

  const id = router.query.productID;
  return (
    <div>
      <h1>Details about Product {id}</h1>
    </div>
  );
};

export default ProductDetails;
