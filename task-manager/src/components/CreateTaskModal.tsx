import React from 'react';
import CreateTaskForm from './CreateTaskForm';
import Modal from 'react-modal';

// React Modalのためのアクセシビリティ設定
Modal.setAppElement('#__next');

interface CreateTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Task"
      className="relative p-6 mx-auto mt-16 w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-md rounded"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={onRequestClose}
      >
        &times;
      </button>
      <CreateTaskForm />
    </Modal>
  );
};

export default CreateTaskModal;
