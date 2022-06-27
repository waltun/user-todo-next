import Link from "next/link";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/outline";
import NavbarDropdown from "./navbarDropdown";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className="bg-gray-200 border-gray-400 px-2 sm:px-4 py-2.5 rounded m-4 font-IRANSans">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/">
            <a className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Logo
              </span>
            </a>
          </Link>
          <div className="flex items-center md:order-2 relative">
            <button
              onClick={handleDropdown}
              className="flex mr-3 text-sm text-black bg-gray-300 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 px-4 py-1"
            >
              <UserCircleIcon className="h-7 w-7 text-black" />
            </button>
            {dropdown ? <NavbarDropdown /> : null}
            <button className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:space-x-reverse md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                    صفحه اصلی
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                    مقالات
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                    درباره ما
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                    تماس با ما
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
