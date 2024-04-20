import React from 'react';
import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';

import Task from '../model/Task';

const TodoItem: React.FC<{ task: Task; onDeleteTask: () => void }> = (
  props
) => {
  const { task, onDeleteTask } = props;
  return (
    <div className="row">
      <div className="col">
        {task.id}. {task.name}
      </div>
      <div className="col">{task.description ? task.description : ''}</div>
      <div className="col col-2">
        <a href="#" onClick={onDeleteTask}>
          <Icon path={mdiTrashCan} size={1} />
        </a>
      </div>
    </div>
  );
};

export default TodoItem;
