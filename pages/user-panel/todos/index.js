import UserLayout from "../../../components/layout/user";
import AddTodo from "../../../components/user-panel/todos/add";
import TodoItems from "../../../components/user-panel/todos/items";
import { setTodos } from "../../../store/slices/todoSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import axios from "axios";


const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.list);

  useEffect(() => {
    const getArticles = async () => {
      let res = await axios.get(
        "https://6283d9436b6c317d5ba74d17.endapi.io/todos"
      );

      dispatch(setTodos(res.data.data));
    };

    getArticles();
  }, []);

  return (
    <>
      <AddTodo />

      <div className="mt-6 p-4 rounded-md border border-gray-200">
        <div className="mb-4">
          <p className="text-lg font-bold text-black">لیست کار ها</p>
        </div>

        {todos.length ? (
          todos.map((todo) => <TodoItems key={todo.id} todo={todo} />)
        ) : (
          <p>چیزی برای نمایش وجود ندارد</p>
        )}
      </div>
    </>
  );
};

Todos.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default Todos;
