import React from 'react';
import TaskCard from './TaskCard';
import CategoryLabel from './CategoryLabel';
import { Task, Category } from '../types';

const TaskBoard: React.FC = () => {
  // Dummy data for demonstration purposes
  const categories: Category[] = [
    { id: 1, name: 'Category 1', description: 'Description for Category 1', color: "red" },
    { id: 2, name: 'Category 2', description: 'Description for Category 2', color: "blue"  },
  ];

  const tasks: Task[] = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Description for Task 1',
      dueDate: new Date(),
      status: 'TODO',
      category: categories[0] ,
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Description for Task 2',
      dueDate: new Date(),
      status: 'WIP',
      category: categories[1]
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryLabel title={category.name} color={category.color} />
            <div className="mt-4">
              {tasks
                .filter((task) => task.category.id === category.id)
                .map((task) => (
                  <div key={task.id} className="mb-4">
                    <TaskCard
                      title={task.name}
                      description={task.description}
                      categoryColor={category.color}
                      dueDate={task.dueDate}
                      status={task.status}
                      category={task.category}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
