import Link from "next/link";

import { useState } from "react";

import { UserCircleIcon, UserIcon, LogoutIcon } from "@heroicons/react/outline";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="flex justify-between shadow h-16 items-center px-4 bg-white">
      <p className="font-lg font-bold text-gray-600">پنل ادمین</p>
      <div className="flex items-center">
        <div className="relative">
          <button
            className="flex items-center justify-center cursor-pointer bg-gray-200 rounded-full w-10 h-10"
            onClick={handleDropdown}
          >
            <UserCircleIcon className="h-7 w-7" />
          </button>
          {dropdown ? (
            <div className="absolute w-48 bg-white shadow border border-gray-200 rounded-md p-2 top-12 left-4">
              <Link href="/user-panel">
                <a className="px-4 py-2 text-xs md:text-sm hover:bg-gray-50 rounded-md text-gray-600 hover:text-black flex items-center">
                  <UserIcon className="w-5 h-5" />
                  <span className="mr-1">پنل کاربری</span>
                </a>
              </Link>
              <form className="w-full">
                <button className="px-4 py-2 text-xs md:text-sm text-right w-full hover:bg-gray-50 rounded-md text-red-500 hover:text-red-700 flex items-center">
                  <LogoutIcon className="w-5 h-5" />
                  <span className="mr-1">خروج</span>
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
