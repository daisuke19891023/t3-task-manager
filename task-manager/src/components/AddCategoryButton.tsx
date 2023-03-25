import React from 'react';

const AddCategoryButton: React.FC = () => {
  const handleClick = () => {
    console.log('Add Category Button clicked');
    // カテゴリ追加処理を実装します
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Add Category
    </button>
  );
};

export default AddCategoryButton;
