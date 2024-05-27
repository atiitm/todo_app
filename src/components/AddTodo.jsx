import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (name && date) {
      addTodo(name, date);
      setName('');
      setDate('');
    }
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter ToDo Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
