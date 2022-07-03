import {
  UserIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";

import Link from "next/link";
import { useState } from "react";

const UserDropdown = () => {
  const [dropDown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropDown);
  };

  return (
    <div className="p-2 space-y-1">
      <div
        className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md hover:text-black cursor-pointer"
        onClick={handleDropdown}
      >
        <div>
          <UserIcon className="w-5 h-5 text-yellow-400" />
        </div>
        <div className="flex justify-between w-full items-center">
          <span className="text-sm px-2">بخش کاربران</span>
          {dropDown ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </div>
      </div>
      {dropDown ? (
        <div className="mt-1 bg-gray-50 rounded-md p-2">
          <Link href="/admin-panel/users">
            <a className="block text-sm text-gray-600 py-2 px-4 hover:bg-gray-100 hover:text-black rounded-md">
              مدیریت کاربران
            </a>
          </Link>
          <Link href="/admin-panel/users/create">
            <a className="block text-sm text-gray-600 py-2 px-4 hover:bg-gray-100 hover:text-black rounded-md">
              ایجاد کاربر جدید
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default UserDropdown;
