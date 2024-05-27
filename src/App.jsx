import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem2 from './components/TodoItem2';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name, date) => {
    setTodos([...todos, { name, date }]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    console.log(newTodos)
    setTodos(newTodos);
  };

  return (
    <center className="todo-container">
      <AddTodo addTodo={addTodo} />
      <div className="items-container">
        {todos.map((todo, index) => (
          <TodoItem2
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </center>
  );
}

export default App;
