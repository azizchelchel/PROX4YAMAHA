import axios from "axios";
import MyTable from "./components/table/Table";

export type article = {
  userId: number;
  id: number;
  title: string;
  completed: string;
};

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const articles: article[] = await response.json();

  return (
    <div className="h-screen text-sm bg-white dark:bg-gray-800">
      {Object.keys(articles).length === 0 && articles.constructor === Object ? (
        <div className="text-lg h-screen">LOODING....</div>
      ) : (
        <MyTable articles={articles} />
      )}
    </div>
  );
}
