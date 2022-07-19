import AdminLayout from "../../../components/layout/admin";
import ArticleItems from "../../../components/admin/articles/items";
import { setArticle } from "../../../store/slices/articleSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.list);

  useEffect(() => {
    const getArticles = async () => {
      let res = await axios.get(
        "https://6283d9436b6c317d5ba74d17.endapi.io/articles"
      );

      dispatch(setArticle(res.data.data));
    };

    getArticles();
  }, []);

  return (
    <div className="bg-white shadow overflow-x-auto rounded-lg hidden md:block">
      <table className="min-w-full">
        <thead>
          <tr className="bg-sky-200">
            <th className="px-4 py-3 text-sm font-bold text-gray-800 text-center rounded-r-md">
              عنوان مقاله
            </th>
            <th className="px-4 py-3 text-sm font-bold text-gray-800 text-center">
              تصویر مقاله
            </th>
            <th className="px-4 py-3 text-sm font-bold text-gray-800 text-center">
              لینک مقاله
            </th>
            <th className="px-4 py-3 text-sm font-bold text-gray-800 text-center">
              Seo Title
            </th>
            <th scope="col" className="relative px-4 py-3 rounded-l-md">
              <span className="sr-only">اقدامات</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {articles
            ? articles.map((article) => (
                <ArticleItems key={article.id} article={article} />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

Articles.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Articles;
