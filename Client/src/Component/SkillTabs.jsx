import React from 'react';

const tabs = [
  'Data Science', 'IT Certifications', 'Leadership', 'Web Development',
  'Communication', 'Business Analytics & Intelligence'
];

const SkillTabs = () => {
  return (
    <div className="flex gap-6 overflow-x-auto border-b py-4 mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="text-gray-700 whitespace-nowrap font-medium hover:text-black border-b-2 border-transparent hover:border-black px-2"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SkillTabs;
