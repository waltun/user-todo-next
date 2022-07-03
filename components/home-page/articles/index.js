import ArticleList from "./articleList";

const Articles = ({ articles }) => {
  articles = articles.data;
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
            <div className="col-span-3">
              <p className="text-center text-lg fnt-bold">
                چیزی برای نمایش وجود ندارد
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Articles;
