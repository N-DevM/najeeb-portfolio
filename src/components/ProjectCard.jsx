import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="p-4">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-600">
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default React.memo(ProjectCard);