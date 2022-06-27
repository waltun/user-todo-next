import Image from "next/image";
import Link from "next/link";
import nextImage from "../../../public/next.png";

const Articles = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto font-IRANSans">
        <div className="flex justify-center border-b border-gray-300 pb-2">
          <p className="text-lg font-bold text-gray-600">لیست مقالات</p>
        </div>
        <div className="md:grid grid-cols-3 gap-4 mt-4">
          <div className="border border-gray-200 rounded-md shadow-md p-4">
            <div className="mb-4">
              <Image
                src={nextImage}
                alt="Next.js banner"
                width={600}
                height={315}
                className="rounded-md"
              />
            </div>
            <div className="mb-4">
              <p className="text-sm font-bold text-black">عنوان مقاله</p>
            </div>
            <div className="mb-2">
              <p className="text-xs font-medium text-gray-700">1401/04/07</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 leading-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است...
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/articles/1">
                <a className="px-6 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600">
                  مشاهده مقاله
                </a>
              </Link>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md shadow-md p-4">
            <div className="mb-4">
              <Image
                src={nextImage}
                alt="Next.js banner"
                width={600}
                height={315}
                className="rounded-md"
              />
            </div>
            <div className="mb-4">
              <p className="text-sm font-bold text-black">عنوان مقاله</p>
            </div>
            <div className="mb-2">
              <p className="text-xs font-medium text-gray-700">1401/04/07</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 leading-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است...
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/articles/1">
                <a className="px-6 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600">
                  مشاهده مقاله
                </a>
              </Link>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md shadow-md p-4">
            <div className="mb-4">
              <Image
                src={nextImage}
                alt="Next.js banner"
                width={600}
                height={315}
                className="rounded-md"
              />
            </div>
            <div className="mb-4">
              <p className="text-sm font-bold text-black">عنوان مقاله</p>
            </div>
            <div className="mb-2">
              <p className="text-xs font-medium text-gray-700">1401/04/07</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 leading-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است...
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/articles/1">
                <a className="px-6 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600">
                  مشاهده مقاله
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
