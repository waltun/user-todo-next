import Link from "next/link";

import { storeUser } from "../../../store/slices/userSlice";

import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import axios from "axios";

const Create = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "normal",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputs = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();

    axios
      .post("https://6283d9436b6c317d5ba74d17.endapi.io/users", data)
      .then((response) => {
        dispatch(storeUser(data));
        router.push("/admin-panel/users");
      });
  };

  return (
    <form className="md:grid grid-cols-2 gap-4" onSubmit={handleForm}>
      <div className="bg-gray-50 rounded-md shadow-md border border-gray-300 p-4">
        <div className="mb-4 border-b-2 border-indigo-600 pb-2">
          <p className="text-gray-600">مشخصات کلی</p>
        </div>

        <div className="mb-4">
          <label htmlFor="inputName" className="block mb-2 text-sm font-bold">
            نام و نام خانوادگی
          </label>
          <input
            id="inputName"
            name="name"
            type="text"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : پوریا مستعان"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inputEmail" className="block mb-2 text-sm font-bold">
            ایمیل
          </label>
          <input
            id="inputEmail"
            name="email"
            type="email"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : example@gmail.com"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inputPhone" className="block mb-2 text-sm font-bold">
            شماره تماس
          </label>
          <input
            id="inputPhone"
            name="phone"
            type="number"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : 09123456789"
            onChange={handleInputs}
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-md shadow-md border border-gray-300 p-4">
        <div className="mb-4 border-b-2 border-indigo-600 pb-2">
          <p className="text-gray-600">بخش تنظیمات</p>
        </div>
        <div className="mb-4">
          <label htmlFor="inputType" className="block mb-2 text-sm font-bold">
            نوع کاربر
          </label>
          <select
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            id="inputType"
            name="type"
            onChange={handleInputs}
          >
            <option>انتخاب کنید</option>
            <option value="normal">کاربر عادی</option>
            <option value="admin">کاربر ادمین</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="inputPassword"
            className="block mb-2 text-sm font-bold"
          >
            رمز عبور
          </label>
          <input
            id="inputPassword"
            name="password"
            type="password"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : ********"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inputPasswordConfirm"
            className="block mb-2 text-sm font-bold"
          >
            تکرار رمز عبور
          </label>
          <input
            id="inputPasswordConfirm"
            name="password_confirm"
            type="password"
            className="bg-white w-full py-2 px-4 rounded-md border border-gray-400 text-sm"
            placeholder="مثلا : ********"
          />
        </div>
      </div>
      <div className="col-span-2 space-x-2 space-x-reverse">
        <button
          className="px-4 py-2 rounded-md text-sm font-bold bg-green-500 hover:bg-green-600 text-white"
          type="submit"
        >
          ثبت کاربر
        </button>
        <Link href="/admin-panel/users">
          <a className="px-4 py-2 rounded-md text-sm font-bold bg-red-500 hover:bg-red-600 text-white">
            انصراف
          </a>
        </Link>
      </div>
    </form>
  );
};

export default Create;
