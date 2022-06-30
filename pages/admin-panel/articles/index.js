import AdminLayout from "../../../components/layout/admin";
import ArticleItems from "../../../components/admin/articles/items";

const Articles = () => {
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
          <ArticleItems />
        </tbody>
      </table>
    </div>
  );
};

Articles.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Articles;
