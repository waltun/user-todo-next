import UserLayout from "../../../components/layout/user";
import AddTodo from "../../../components/user-panel/todos/add";
import TodoItems from "../../../components/user-panel/todos/items";

const Todos = () => {
  return (
    <>
      <AddTodo />

      <div className="mt-6 p-4 rounded-md border border-gray-200">
        <div className="mb-4">
          <p className="text-lg font-bold text-black">لیست کار ها</p>
        </div>

        <TodoItems />
      </div>
    </>
  );
};

Todos.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default Todos;
