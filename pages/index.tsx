import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Placing your order");
    router.push("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
      <Link href="/product">
        <p>product</p>
      </Link>
      <button onClick={handleClick}>Place Order</button>

      <Link href="/posts">
        <p>Posts</p>
      </Link>
    </div>
  );
};

export default Home;
