import AdminLayout from "../../../components/layout/admin";

const Users = () => {
  return (
    <div className="bg-white shadow overflow-x-auto rounded-lg hidden md:block">
      <table className="min-w-full">
        <thead>
          <tr className="bg-sky-200">
            <th className="px-4 py-3 text-sm font-bold text-gray-800 text-center rounded-r-md">
              نام کاربر
            </th>
            <th className="px-4 py-3 text-sm font-bold text-gray-800 text-center">
              شماره تماس کاربر
            </th>
            <th className="px-4 py-3 text-sm font-bold text-gray-800 text-center">
              ایمیل کاربر
            </th>
            <th className="px-4 py-3 text-sm font-bold text-gray-800 text-center">
              نوع کاربر
            </th>
            <th scope="col" className="relative px-4 py-3 rounded-l-md">
              <span className="sr-only">اقدامات</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 whitespace-nowrap">
              <p className="text-sm text-black text-center">پوریا مستعان</p>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
              <p className="text-sm text-black text-center">09022228553</p>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
              <p className="text-sm text-indigo-black text-center block">
                pooriyamostaan1@gmail.com
              </p>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
              <p className="text-sm text-black text-center">کاربر ادمین</p>
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

Users.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Users;
