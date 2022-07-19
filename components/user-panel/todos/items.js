import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../store/slices/todoSlice'
import axios from 'axios'

const TodoItems = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await axios
      .delete(`https://6283d9436b6c317d5ba74d17.endapi.io/todos/${todo.id}`)
      .then((response) => {
        dispatch(deleteTodo(todo.id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-4 rounded-md border border-gray-300 mb-4">
      <div className="mb-4">
        <p className="text-sm text-black leading-6">{todo.text}</p>
      </div>
      <div className="flex justify-end space-x-4 space-x-reverse">
        <button
          className="bg-red-500 hover:bg-red-600 rounded-md text-white px-6 py-1.5 text-sm"
          onClick={handleDelete}
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
