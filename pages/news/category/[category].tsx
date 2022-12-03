import Link from "next/link";
import React from "react";
import { Article } from "..";

const ListArticlesByCategory = ({
  articles,
  category,
}: {
  articles: Article[];
  category: string;
}) => {
  if (articles.length === 0) {
    <h1 className="px-4 py-8 text-3xl font-bold">
      No Article related to this category {category}
    </h1>;
  }
  return (
    <>
      <h1 className="px-4 py-8 text-3xl font-bold">
        List of news in the category {category}
      </h1>
      {articles.map((article) => (
        <div key={article.id} className="border-b-4 p-4">
          <h2 className="text-lg font-bold">
            {article.title} - {article.category}
          </h2>
          <p>{article.description}</p>
          <Link href={`/news/${article.id}`} legacyBehavior>
            <a className="text-blue-500 hover:text-blue-800 hover:underline">
              More Details
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ListArticlesByCategory;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:5050/news?category=${params.category}`
  );
  const data: Article[] = await response.json();
  return {
    props: {
      articles: data,
      category: params.category,
    },
  };
}
