import React from 'react';
import LoadingSkeleton from './LoadingSkeleton';

const FoodCardSkeleton: React.FC = () => {
  return (
    <div className="card animate-pulse">
      <LoadingSkeleton className="h-48 rounded-t-lg" />
      <div className="p-4">
        <LoadingSkeleton className="h-6 w-3/4 mb-2" />
        <LoadingSkeleton className="h-4 w-full mb-3" />
        <div className="flex items-center justify-between">
          <LoadingSkeleton className="h-6 w-20" />
          <LoadingSkeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;