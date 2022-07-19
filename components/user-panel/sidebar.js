import Image from "next/image";
import userImage from "../../public/user.png";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="p-4 rounded-md shadow-md bg-white border border-gray-200">
        <div className="mb-4 flex justify-center">
          <Image src={userImage} alt="user profile" width={120} height={120} />
        </div>
        <ul className="mb-4 divide-y divide-gray-300">
          <li className="py-2">
            <Link href="/user-panel">
              <a className="text-sm font-bold text-indigo-500">داشبورد</a>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/">
              <a className="text-sm font-bold text-indigo-500">صفحه اصلی</a>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/user-panel/todos">
              <a className="text-sm font-bold text-indigo-500">لیست کار ها</a>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/user-panel/edit/[id]">
              <a className="text-sm font-bold text-indigo-500">
                ویرایش اطلاعات
              </a>
            </Link>
          </li>
          <li className="py-2">
            <a className="text-sm font-bold text-red-500">خروج</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
