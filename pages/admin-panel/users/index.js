import AdminLayout from "../../../components/layout/admin";
import UserItems from "../../../components/admin/users/items";
import { setUser } from "../../../store/slices/userSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.list);

  useEffect(() => {
    const getUsers = async () => {
      let res = await axios.get(
        "https://6283d9436b6c317d5ba74d17.endapi.io/users"
      );

      dispatch(setUser(res.data.data));
    };

    getUsers();
  }, []);

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
          {users
            ? users.map((user) => <UserItems key={user.id} user={user} />)
            : null}
        </tbody>
      </table>
    </div>
  );
};

Users.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Users;
