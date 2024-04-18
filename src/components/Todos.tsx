import React from 'react';
import './Todos.css';

import Task from '../model/Task';
import TodoItem from './TodoItem';

const Todos: React.FC<{ tasks: Task[] }> = (props) => {
  return (
    <div className="container taskList">
      <div className="row">
        <h3>Task List</h3>
      </div>
      <div className="row">
        <div>
          {props.tasks.map((task) => {
            return <TodoItem key={task.id} task={task} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
