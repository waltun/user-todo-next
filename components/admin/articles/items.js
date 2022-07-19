import Link from "next/link";

import { deleteArticle } from "../../../store/slices/articleSlice";

import { useDispatch } from "react-redux";

import axios from "axios";

const ArticleItems = ({ article }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await axios
      .delete(
        "https://6283d9436b6c317d5ba74d17.endapi.io/articles/" + article.id
      )
      .then((response) => {
        dispatch(deleteArticle(article.id));
      });
  };

  return (
    <tr>
      <td className="px-4 py-3 whitespace-nowrap">
        <p className="text-sm text-black text-center">{article.title}</p>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <p className="text-sm text-black text-center">{article.image}</p>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <Link href={"/articles/" + article.id}>
          <a className="text-sm text-indigo-600 text-center block">
            {article.slug}
          </a>
        </Link>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <p className="text-sm text-black text-center">{article.seo_title}</p>
      </td>
      <td className="px-4 py-3 space-x-3 space-x-reverse whitespace-nowrap">
        <Link
          href={"/admin-panel/articles/edit/[id]"}
          as={`/admin-panel/articles/edit/${article.id}`}
        >
          <a className="px-4 py-1.5 text-xs bg-indigo-500 hover:bg-indigo-600 rounded-md text-white">
            ویرایش
          </a>
        </Link>
        <button
          className="px-4 py-1.5 text-xs bg-red-500 hover:bg-red-600 rounded-md text-white"
          onClick={handleDelete}
        >
          حذف
        </button>
      </td>
    </tr>
  );
};

export default ArticleItems;
