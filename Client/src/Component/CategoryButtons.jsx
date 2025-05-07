import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Development', slug: 'development' },
  { name: 'Business', slug: 'business' },
  { name: 'IT & Software', slug: 'it-software' },
  { name: 'Design', slug: 'design' },
  { name: 'Marketing', slug: 'marketing' },
  { name: 'Personal Development', slug: 'personal-development' },
  { name: 'Photography', slug: 'photography' },
  { name: 'Music', slug: 'music' }
];

const CategoryButtons = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((cat, idx) => (
        <Link
          key={idx}
          to={`/courses/${cat.slug}`}
          className="flex-shrink-0 bg-gray-200 hover:bg-gray-300 rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;
