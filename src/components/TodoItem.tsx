import React from 'react';

import Task from '../model/Task';

const TodoItem: React.FC<{ task: Task }> = (props) => {
  const { task } = props;
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={'task' + task.id}
      />
      <label className="form-check-label" htmlFor={'task' + task.id}>
        {task.id}. {task.name}
      </label>
      <small>{task.description ? ' - ' + task.description : ''}</small>
    </div>
  );
};

export default TodoItem;
