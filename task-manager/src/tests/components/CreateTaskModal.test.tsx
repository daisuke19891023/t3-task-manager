import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CreateTaskModal from '../../components/CreateTaskModal';

describe('CreateTaskModal', () => {
  it('renders the modal with title, description, and due date input fields', () => {
    const onRequestClose = jest.fn();
    render(<CreateTaskModal isOpen={true} onRequestClose={onRequestClose} />);

    const titleInput = screen.getByPlaceholderText('Title');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const dueDateInput = screen.getByLabelText('Due Date');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(dueDateInput).toBeInTheDocument();
  });

  it('closes the modal when close button is clicked', () => {
    const onRequestClose = jest.fn();
    render(<CreateTaskModal isOpen={true} onRequestClose={onRequestClose} />);

    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });
});
