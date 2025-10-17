import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-4">
      <ul className="w-full max-w-md bg-white rounded shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Todos</h2>
        {todos.length === 0 ? (
          <p className="text-gray-500">No todos yet!</p>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center mb-2 p-2 border-b border-gray-200"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Todo;

