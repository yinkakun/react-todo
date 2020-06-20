import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({ tasks, deleteTask, toggleTask }) => {
  const todos = tasks.map((task) => (
    <TodoItem
      name={task.name}
      key={task.id}
      id={task.id}
      isCompleted={task.isCompleted}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
    />
  ));

  return <ul className="todo-list">{todos}</ul>;
};

export default TodoList;
