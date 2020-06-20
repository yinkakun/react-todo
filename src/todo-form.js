import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTAsk = (e) => {
    e.preventDefault();
    const name = taskName.trim();
    setTaskName('');
    if (!name) return;
    addTask(name);
  };

  return (
    <form className="todo-form" onSubmit={handleAddTAsk}>
      <input
        className="todo-input"
        placeholder="what do you need to do?"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="todo-submit" type="submit">
        add
      </button>
    </form>
  );
};

export default TodoForm;
