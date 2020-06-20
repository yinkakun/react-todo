/* eslint-disable no-bitwise */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoDetails from './todo-details';
import TodoForm from './todo-form';
import TodoList from './todo-list';
import * as serviceWorker from './service-worker';

const UUID = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const App = () => {
  const [tasks, setTasks] = usePersistedState('task-up', []);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, isCompleted: false, id: UUID() }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  return (
    <div className="todo">
      <TodoForm addTask={addTask} />
      <TodoDetails tasks={tasks} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
