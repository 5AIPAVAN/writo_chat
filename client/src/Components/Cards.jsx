
import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-center h-32 bg-green-500 text-white">
        {icon}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-600 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
