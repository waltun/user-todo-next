import Link from "next/link";

import { deleteUser } from "../../../store/slices/userSlice";

import { useDispatch } from "react-redux";

import axios from "axios";

const UserItems = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await axios
      .delete("https://6283d9436b6c317d5ba74d17.endapi.io/users/" + user.id)
      .then((response) => {
        dispatch(deleteUser(user.id));
      });
  };

  return (
    <tr>
      <td className="px-4 py-3 whitespace-nowrap">
        <p className="text-sm text-black text-center">{user.name}</p>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <p className="text-sm text-black text-center">{user.phone}</p>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <p className="text-sm text-indigo-black text-center block">
          {user.email}
        </p>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        {user.type === "admin" ? (
          <p className="text-sm text-white text-center bg-green-500 rounded-md py-1">
            کاربر ادمین
          </p>
        ) : (
          <p className="text-sm text-white text-center bg-gray-500 rounded-md py-1">
            کاربر عادی
          </p>
        )}
      </td>
      <td className="px-4 py-3 space-x-3 space-x-reverse whitespace-nowrap">
        <Link
          href={"/admin-panel/users/edit/[id]"}
          as={`/admin-panel/users/edit/${user.id}`}
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

export default UserItems;
