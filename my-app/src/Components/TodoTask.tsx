import React from 'react';
import { ITask } from '../interface';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task.taskName}</span>
      </div>
      <button 
      onClick={() => {
        completeTask(task.taskName);
      }}
      >
        Delete</button>
    </div>
  );
};

export default TodoTask;
