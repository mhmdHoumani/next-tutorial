import Link from "next/link";
import React from "react";

export type PostProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Posts = ({ posts }: { posts: PostProps[] }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h2>{post.id + " " + post.title}</h2>
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostProps[] = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default Posts;
