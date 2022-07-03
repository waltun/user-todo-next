import Image from "next/image";
import nextImage from "../../../public/next.png";

const ArticleSingle = ({ article }) => {
  article = article.data;
  return (
    <div className="mt-4 max-w-4xl mx-auto font-IRANSans">
      <div className="mb-4 flex justify-between items-center">
        <p className="text-lg font-bold text-black">
          عنوان مقاله : {article.title}
        </p>
        <p className="text-sm text-gray-600">1401/04/07</p>
      </div>
      <div className="mb-4">
        <Image
          src={nextImage}
          alt="next.js banner"
          width={1000}
          height={500}
          className="rounded-md"
        />
      </div>
      <div className="mb-4">
        <p className="text-sm leading-7 text-gray-800">{article.text}</p>
      </div>
    </div>
  );
};

export default ArticleSingle;
