import {
  BadgeCheckIcon,
  HomeIcon,
  NewspaperIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [dropDown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropDown);
  };

  return (
    <div className="fixed w-64 md:flex hidden h-full font-IRANSans">
      <aside className="bg-white overflow-y-auto flex flex-col flex-grow border-l border-gray-200">
        <span className="hidden justify-end pt-2 pl-2" id="sidebar-close-icon">
          <BadgeCheckIcon className="h-6 w-6" />
        </span>
        <div className="px-4 h-16 flex items-center justify-center border-b border-gray-200">
          <div>
            <BadgeCheckIcon className="h-6 w-6 text-indigo-500" />
          </div>
          <div className="pr-2">
            <p className="font-bold text-lg">مدیریت</p>
          </div>
        </div>

        <div className="p-2 space-y-1">
          <Link href="/admin-panel">
            <a className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md hover:text-black">
              <div>
                <HomeIcon className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-sm px-2">داشبورد</span>
            </a>
          </Link>
        </div>

        <div>
          <div
            className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md hover:text-black cursor-pointer"
            onClick={handleDropdown}
          >
            <div>
              <NewspaperIcon className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="flex justify-between w-full items-center">
              <span className="text-sm px-2">بخش مقالات</span>
              {dropDown ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </div>
          </div>
          {dropDown ? (
            <div className="mt-1 bg-gray-50 rounded-md p-2">
              <a className="block text-sm text-gray-600 py-2 px-4 hover:bg-gray-100 hover:text-black rounded-md">
                مدیریت مقالات
              </a>
              <a className="block text-sm text-gray-600 py-2 px-4 hover:bg-gray-100 hover:text-black rounded-md">
                ایجاد مقاله جدید
              </a>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
