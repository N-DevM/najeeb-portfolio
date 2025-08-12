import React from 'react';

const RecommendationCard = ({ text }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full h-auto md:h-52 flex items-center">
      <p className="text-gray-600 italic">
        <span className="text-[#7600bc] font-serif text-2xl mr-1">“</span>
        {text}
        <span className="text-[#7600bc] font-serif text-2xl ml-1">”</span>
      </p>
    </div>
  );
};

export default React.memo(RecommendationCard);