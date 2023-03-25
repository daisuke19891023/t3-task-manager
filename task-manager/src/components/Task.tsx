import React from 'react';

interface TaskProps {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
}

const Task: React.FC<TaskProps> = ({ title, description, dueDate, priority }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <p>Due Date: {dueDate}</p>
      <p>Priority: {priority}</p>
    </div>
  );
};

export default Task;
