import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeTodo } from "../../../store/slices/todoSlice";
import axios from 'axios'

const AddTodo = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const submitTodo = () => {
    if (text.length > 0) {
      axios
        .post("https://6283d9436b6c317d5ba74d17.endapi.io/todos", {
          text: text,
          done: false,
        })
        .then((response) => {
          dispatch(
            storeTodo({
              text: text,
              done: false,
            })
          );
        })
        .catch((error) => console.log(error));

      setText("");
    }
  };

  return (
    <div className="p-4 rounded-md border borde-gray-200 shadow-sm">
      <div className="mb-4">
        <p className="text-lg font-bold text-black">افزودن کار جدید به لیست</p>
      </div>
      <div className="mb-4">
        <input
          name="todo"
          className="bg-white w-full rounded-md border border-gray-300 px-4 py-2 text-sm"
          placeholder="کار جدید را وارد کنید"
          onChange={inputHandler}
          value={text}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="bg-green-500 hover:bg-green-600 px-6 py-1.5 rounded-md text-white text-sm"
          onClick={submitTodo}
        >
          ثبت
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
