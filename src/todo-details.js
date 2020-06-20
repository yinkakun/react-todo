import React from 'react';

const TodoDetails = ({ tasks }) => {
  const inCompleteTasks = tasks.filter((task) => task.isCompleted !== true)
    .length;

  return <p className="todo-details">You have {inCompleteTasks} tasks left </p>;
};

export default TodoDetails;
