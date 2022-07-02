import AdminLayout from "../../../components/layout/admin";
import UserItems from "../../../components/admin/users/items";

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
          <UserItems />
        </tbody>
      </table>
    </div>
  );
};

Users.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Users;
