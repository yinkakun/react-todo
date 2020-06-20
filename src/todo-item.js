import React from 'react';

const TodoItem = ({ name, id, isCompleted, deleteTask, toggleTask }) => {
  return (
    <li className="todo-item">
      <label htmlFor={id}>
        <input
          className="todo-toggle visually-hidden"
          type="checkbox"
          id={id}
          autoComplete="false"
          onClick={() => toggleTask(id)}
          defaultChecked={isCompleted}
        />
        <span className="todo-toggle-indicator" />
        <span className="todo-name">{name}</span>
      </label>
      <button
        onClick={() => deleteTask(id)}
        className="todo-delete"
        type="button"
      >
        delete
      </button>
    </li>
  );
};

export default TodoItem;
