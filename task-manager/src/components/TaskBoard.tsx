import React from 'react';
import Category from './Category';
import Task from './Task';

// Dummy data for demonstration
const categories = [
  { id: 1, title: 'Category 1', description: 'This is Category 1', color: 'blue' },
  { id: 2, title: 'Category 2', description: 'This is Category 2', color: 'green' },
];

const tasks = [
  { id: 1, title: 'Task 1', description: 'This is Task 1', dueDate: '2023-04-01', priority: 'High', categoryId: 1 },
  { id: 2, title: 'Task 2', description: 'This is Task 2', dueDate: '2023-04-05', priority: 'Low', categoryId: 2 },
];

const TaskBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {categories.map((category) => (
        <div key={category.id}>
          <Category title={category.title} description={category.description} color={category.color} />
          {tasks.filter((task) => task.categoryId === category.id).map((task) => (
            <Task key={task.id} title={task.title} description={task.description} dueDate={task.dueDate} priority={task.priority} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;