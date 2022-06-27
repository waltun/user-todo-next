import Link from "next/link";

const NavbarItems = () => {
  return (
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
  );
};

export default NavbarItems;
