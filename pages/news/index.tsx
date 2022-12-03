import Link from "next/link";
import React from "react";

export type Article = {
  id: number;
  title: string;
  description: string;
  category: string;
};

const News = ({ news }: { news: Article[] }) => {
  return (
    <>
      <h1 className="px-4 py-8 text-3xl font-bold">List of news</h1>
      {news.map((article) => (
        <div key={article.id} className="p-4 shadow">
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

export default News;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:5050/news");
  const data: Article[] = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
