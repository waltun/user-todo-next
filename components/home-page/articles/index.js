import ArticleList from "./articleList";

import { useDispatch, useSelector } from "react-redux";
import { setArticle } from "../../../store/slices/articleSlice";

import axios from "axios";

import { useEffect } from "react";

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
    <>
      <div className="max-w-5xl mx-auto font-IRANSans">
        <div className="flex justify-center border-b border-gray-300 pb-2">
          <p className="text-lg font-bold text-gray-600">لیست مقالات</p>
        </div>
        <div className="md:grid grid-cols-3 gap-4 mt-4">
          {articles ? (
            articles.map((article) => (
              <ArticleList key={article.id} article={article} />
            ))
          ) : (
            <p className="text-center text-lg fnt-bold">
              چیزی برای نمایش وجود ندارد
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Articles;
