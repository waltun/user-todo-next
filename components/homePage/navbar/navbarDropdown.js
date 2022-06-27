import Link from "next/link";

const NavbarDropdown = () => {
  return (
    <>
      <div className="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow absolute left-0 top-4">
        <div className="py-3 px-4">
          <span className="block text-sm font-bold text-gray-900">
            پوریا مستعان
          </span>
          <span className="block text-sm text-gray-500 truncate">
            pooriya@gmail.com
          </span>
          <span className="block text-xs text-gray-400 truncate">
            کاربر عادی
          </span>
        </div>
        <ul className="py-1" aria-labelledby="dropdown">
          <li>
            <Link href="/user-panel">
              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                پنل کاربری
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin-panel">
              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                پنل ادمین
              </a>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
            >
              خروج
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarDropdown;
