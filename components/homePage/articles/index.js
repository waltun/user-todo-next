import ArticleList from "./articleList";

const Articles = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto font-IRANSans">
        <div className="flex justify-center border-b border-gray-300 pb-2">
          <p className="text-lg font-bold text-gray-600">لیست مقالات</p>
        </div>
        <div className="md:grid grid-cols-3 gap-4 mt-4">
          <ArticleList />
        </div>
      </div>
    </>
  );
};

export default Articles;
