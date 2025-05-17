import React from 'react';
import { FoodItem } from '../../types';
import FoodCard from '../shared/FoodCard';

interface MenuGridProps {
  items: FoodItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">No items found. Try another category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;