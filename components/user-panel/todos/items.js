const TodoItems = () => {
  return (
    <div className="p-4 rounded-md border border-gray-300 mb-4">
      <div className="mb-4">
        <p className="text-sm text-black leading-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
      <div className="flex justify-end space-x-4 space-x-reverse">
        <button className="bg-red-500 hover:bg-red-600 rounded-md text-white px-6 py-1.5 text-sm">
          حذف
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-600 rounded-md text-white px-6 py-1.5 text-sm">
          ویرایش
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
