import React from 'react';
import TaskBoard from '../components/TaskBoard';

const TaskBoardPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Task Board</h1>
      <TaskBoard />
    </div>
  );
};

export default TaskBoardPage;
