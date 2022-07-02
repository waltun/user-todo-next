const UserItems = () => {
  return (
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
  );
};

export default UserItems;