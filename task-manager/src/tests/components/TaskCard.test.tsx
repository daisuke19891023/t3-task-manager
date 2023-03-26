import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskCard from '../../components/TaskCard';

describe('TaskCard', () => {
  const taskProps = {
    name: 'Test Task',
    description: 'This is a test task',
    categoryColor: 'blue',
    dueDate: new Date(),
    status: "TODO",
    category: {
      id: 1,
      name: 'Test Category',
      description: 'This is a test category',
      color: 'blue',
    },
  };

  test('renders task title and description', () => {
    render(<TaskCard {...taskProps} />);

    const titleElement = screen.getByText(taskProps.name);
    const descriptionElement = screen.getByText(taskProps.description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
