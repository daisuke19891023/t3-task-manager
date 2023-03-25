import React, { useState } from 'react';
import TaskCard from './TaskCard';
import CategoryLabel from './CategoryLabel';
import type { Category } from '../types/Category';
import type { Task } from '../types/Task';
import AddCategoryButton from './AddCategoryButton';
import CreateTaskModal from './CreateTaskModal';

const TaskBoard: React.FC = () => {
  // Dummy data for demonstration purposes
  const categories: Category[] = [
    { id: 1, name: 'Category 1', description: 'Description for Category 1', color: 'red' },
    { id: 2, name: 'Category 2', description: 'Description for Category 2', color: 'blue' },
  ];

  const tasks: Task[] = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Description for Task 1',
      dueDate: new Date(),
      status: 'TODO',
      category: categories[0],
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Description for Task 2',
      dueDate: new Date(),
      status: 'WIP',
      category: categories[1],
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Task Board</h1>
       <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryLabel title={category.name} color={category.color} />
            <div className="mt-4">
              {tasks
                .filter((task) => task.category?.id === category.id)
                .map((task) => (
                  <div key={task.id} className="mb-4">
                    <TaskCard
                      title={task.name}
                      description={task.description}
                      categoryColor={task.category?.color ?? ''}
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
           {/* タスク追加ボタン */}
           <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
        onClick={openModal}
      >
        Add Task
      </button>

      {/* タスク作成モーダル */}
      <CreateTaskModal isOpen={isModalOpen} onRequestClose={closeModal} />

      <div className="mt-4">
        <AddCategoryButton />
      </div>
    </div>
  );
};
export default TaskBoard;
