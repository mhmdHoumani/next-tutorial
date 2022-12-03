import { useRouter } from "next/router";
import React from "react";
import { PostProps } from ".";

const PostDetails = ({ post }: { post: PostProps }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading Details...</h1>;
  }

  return (
    <div>
      <h2>{post.id + " " + post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  const data: PostProps = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
    // fallback: true, //Used when we have lots of data, which will create a small loading screen while rendering the data (we can leave the paths empty since it can render every page at the first visit)
    // fallback: false, //Used when we have a restricted number of data, but we need to specify the number of items that data have in the paths element
    // fallback: 'blocking', //Same as true but without a loading screen while rendering, instead only the loading indicator will be visible to the user while rendering the page (so no need to useRouter and the if condition we have when it's equal to true)
  };
}

export default PostDetails;
