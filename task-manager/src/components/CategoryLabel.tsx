import React from 'react';

interface CategoryLabelProps {
  title: string;
  color: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ title, color }) => {
  return (
    <div className={`py-1 px-2 bg-${color}-500 text-white font-semibold rounded`}>
      {title}
    </div>
  );
};

export default CategoryLabel;
