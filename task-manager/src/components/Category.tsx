import React from 'react';

interface CategoryProps {
  title: string;
  description: string;
  color: string;
}

const Category: React.FC<CategoryProps> = ({ title, description, color }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Category;
