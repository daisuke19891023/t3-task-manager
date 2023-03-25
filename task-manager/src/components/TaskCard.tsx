import React from 'react';
import type { Category } from '../types/Category';
interface TaskCardProps {
  title: string;
  description: string;
  categoryColor: string;
  dueDate: Date;
status: string;
category: Category | undefined;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, categoryColor, dueDate, status }) => {
  return (
    <div className={`p-4 border-2 border-${categoryColor}-500 rounded`}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <p className="text-sm">{status}</p>
      <p className="text-sm">{dueDate.toString()}</p>
    </div>
  );
};

export default TaskCard;
