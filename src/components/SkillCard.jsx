import React from 'react';

const SkillCard = ({ icon, name, experience }) => {
  return (
    <div className="bg-white p-6 w-56 text-center rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <img src={icon} alt={`${name} icon`} className="h-14 mx-auto mb-4" />
      <h6 className="text-xl font-semibold mb-1">{name}</h6>
      <p className="text-gray-500">{experience}</p>
    </div>
  );
};

// Wrap with React.memo for performance optimization
export default React.memo(SkillCard);