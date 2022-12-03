import React from "react";
import { Article } from ".";

const ArticleDetails = ({
  article,
  articleID,
}: {
  article: Article;
  articleID: number;
}) => {
  if (Object.keys(article).length === 0) {
    return (
      <h1 className="px-4 py-8 text-3xl font-bold">
        Article with id &apos;{articleID}&apos; does not exist
      </h1>
    );
  }
  return (
    <div className="m-4 p-4 shadow-[0_0_10px_0_#0002]">
      <h2 className="text-lg font-bold">
        {article.title} - {article.category}
      </h2>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticleDetails;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:5050/news/${params.articleID}`
  );
  const data: Article = await response.json();
  return {
    props: {
      article: data,
      articleID: params.articleID,
    },
  };
}
