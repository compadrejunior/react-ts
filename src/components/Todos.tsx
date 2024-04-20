import React from 'react';
import './Todos.css';

import Task from '../model/Task';
import TodoItem from './TodoItem';

const Todos: React.FC<{
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
}> = (props) => {
  const { tasks, onDeleteTask } = props;
  return (
    <div className="container taskList">
      <div className="row">
        <h3>Task List</h3>
        <hr />
      </div>
      <div className="row">
        <div className="row">
          <div className="col">
            <strong>Name</strong>
          </div>
          <div className="col">
            <strong>Description</strong>
          </div>
          <div className="col col-2">
            <strong>Action</strong>
          </div>
        </div>
        <hr />
        {tasks.map((task) => {
          return (
            <TodoItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask.bind(null, task.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
