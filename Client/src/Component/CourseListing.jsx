import React from 'react';
import { useParams } from 'react-router-dom';

const CourseListing = () => {
  const { categorySlug } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Courses in {categorySlug.replace('-', ' ')}</h2>
      {/* Add filter options and course cards here based on categorySlug */}
    </div>
  );
};

export default CourseListing;
