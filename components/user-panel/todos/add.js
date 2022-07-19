const AddTodo = () => {
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
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-green-500 hover:bg-green-600 px-6 py-1.5 rounded-md text-white text-sm">
          ثبت
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
