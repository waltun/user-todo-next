const UserItems = ({ user }) => {
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
        <button className="px-4 py-1.5 text-xs bg-indigo-500 hover:bg-indigo-600 rounded-md text-white">
          ویرایش
        </button>
        <button className="px-4 py-1.5 text-xs bg-red-500 hover:bg-red-600 rounded-md text-white">
          حذف
        </button>
      </td>
    </tr>
  );
};

export default UserItems;
