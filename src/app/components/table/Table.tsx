import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { article } from "@/app/page";

export default function MyTable(props: any) {
  const { articles } = props;
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="dark:bg-[#374151]">
        <TableHead>
          <TableHeadCell className="p-4 ">{/* <Checkbox /> */}</TableHeadCell>
          <TableHeadCell>user id</TableHeadCell>
          <TableHeadCell>id</TableHeadCell>
          <TableHeadCell>title</TableHeadCell>
          <TableHeadCell>completed</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {articles ? (
            articles.map((article: article) => (
              <TableRow
                key={article.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="p-4">
                  <Checkbox />
                </TableCell>
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </TableCell>
                <TableCell>{article.userId}</TableCell>
                <TableCell>{article.id}</TableCell>
                <TableCell>{article.title}</TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <div>nothing</div>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
