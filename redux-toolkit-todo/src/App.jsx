import React from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">My Todo App</h1>

      {/* Add Todo input */}
      <AddTodo />

      {/* Todo List */}
      <Todo />
    </div>
  );
}

export default App;
