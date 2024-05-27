import React from 'react';

function TodoItem2({ todo, index, deleteTodo }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          {todo.name}
        </div>
        <div className="col-4">
          {todo.date}
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
