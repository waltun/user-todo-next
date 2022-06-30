import AdminLayout from "../../../components/layout/admin";

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
          <tr>
            <td className="px-4 py-3 whitespace-nowrap">
              <p className="text-sm text-black text-center">عنوان</p>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
              <p className="text-sm text-black text-center">تصویر</p>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
              <p className="text-sm text-black text-center">لینک</p>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
              <p className="text-sm text-black text-center">عنوان سئو</p>
            </td>
            <td className="px-4 py-3 space-x-3 space-x-reverse whitespace-nowrap">
              <button className="px-4 py-1.5 text-xs bg-indigo-500 hover:bg-indigo-600 rounded-md text-white">
                ویرایش
              </button>
              <button className="px-4 py-1.5 text-xs bg-red-500 hover:bg-red-600 rounded-md text-white">
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Articles.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Articles;
