import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { updateArticle } from "../../../store/slices/articleSlice";
import { useDispatch } from "react-redux";

const Edit = ({ data }) => {
  const [article, setArticle] = useState(data);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setArticle({
      ...article,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .put(`https://6283d9436b6c317d5ba74d17.endapi.io/articles/${data.id}`, {
        ...article,
      })
      .then((response) => {
        dispatch(updateArticle(article));
        router.push("/admin-panel/articles");
      });
  };

  return (
    <form className="md:grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="bg-gray-50 rounded-md shadow-md border border-gray-300 p-4">
        <div className="mb-4 border-b-2 border-indigo-600 pb-2">
          <p className="text-gray-600">مشخصات کلی</p>
        </div>

        <div className="mb-4">
          <label htmlFor="inputTitle" className="block mb-2 text-sm font-bold">
            عنوان مقاله
          </label>
          <input
            id="inputTitle"
            name="title"
            type="text"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : مقاله شماره یک"
            value={article.title}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inputSlug" className="block mb-2 text-sm font-bold">
            لینک مقاله
          </label>
          <input
            id="inputSlug"
            name="slug"
            type="text"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : article-number-one"
            value={article.slug}
            onChange={handleInputs}
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-md shadow-md border border-gray-300 p-4">
        <div className="mb-4 border-b-2 border-indigo-600 pb-2">
          <p className="text-gray-600">بخش سئو</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="inputSeoTitle"
            className="block mb-2 text-sm font-bold"
          >
            Seo Title
          </label>
          <input
            id="inputSeoTitle"
            name="seo_title"
            type="text"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : مقاله شماره یک"
            value={article.seo_title}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inputSeoMeta"
            className="block mb-2 text-sm font-bold"
          >
            Seo Meta
          </label>
          <select
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            id="inputSeoMeta"
            name="seo_meta"
            onChange={handleInputs}
            value={article.seo_meta}
          >
            <option>انتخاب کنید</option>
            <option value="index, follow">index, follow</option>
            <option value="noindex, nofollow">noindex, nofollow</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-50 rounded-md shadow-md border border-gray-300 p-4">
        <div className="mb-4 border-b-2 border-indigo-600 pb-2">
          <p className="text-gray-600">بخش تنظیمات</p>
        </div>
        <div className="mb-4">
          <label htmlFor="inputType" className="block mb-2 text-sm font-bold">
            نوع مقاله
          </label>
          <select
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            id="inputType"
            name="type"
            onChange={handleInputs}
            value={article.type}
          >
            <option>انتخاب کنید</option>
            <option value="normal">معمولی</option>
            <option value="important">مهم</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="inputTime" className="block mb-2 text-sm font-bold">
            زمان مطالعه
          </label>
          <input
            id="inputTime"
            name="time"
            type="number"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : 15"
            value={article.time}
            onChange={handleInputs}
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-md shadow-md border border-gray-300 p-4">
        <div className="mb-4 border-b-2 border-indigo-600 pb-2">
          <p className="text-gray-600">بخش تصویر</p>
        </div>
        <div className="mb-4">
          <label htmlFor="inputImage" className="block mb-2 text-sm font-bold">
            تصویر مقاله
          </label>
          <input
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            type="file"
            name="image"
            id="inputImage"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inputAlt" className="block mb-2 text-sm font-bold">
            Alt تصویر
          </label>
          <input
            id="inputAlt"
            name="alt"
            type="text"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : next.js image"
            value={article.alt}
            onChange={handleInputs}
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-md shadow-md border border-gray-300 p-4 col-span-2">
        <div className="mb-4 border-b-2 border-indigo-600 pb-2">
          <p className="text-gray-600">بخش محتوا</p>
        </div>
        <div className="mb-4">
          <label htmlFor="inputText" className="block mb-2 text-sm font-bold">
            متن مقاله
          </label>
          <textarea
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm h-64 resize-none"
            name="text"
            id="inputText"
            value={article.text}
            onChange={handleInputs}
          ></textarea>
        </div>
      </div>

      <div className="col-span-2 space-x-2 space-x-reverse">
        <button
          className="px-4 py-2 rounded-md text-sm font-bold bg-indigo-500 hover:bg-indigo-600 text-white"
          type="submit"
        >
          ویرایش مقاله
        </button>
        <Link href="/admin-panel/articles">
          <a className="px-4 py-2 rounded-md text-sm font-bold bg-red-500 hover:bg-red-600 text-white">
            انصراف
          </a>
        </Link>
      </div>
    </form>
  );
};

export default Edit;
