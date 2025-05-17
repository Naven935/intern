import React from 'react';
import { Link } from 'react-router-dom';
import { FoodItem } from '../../types';
import FoodCard from '../shared/FoodCard';

interface PopularItemsProps {
  items: FoodItem[];
}

const PopularItems: React.FC<PopularItemsProps> = ({ items }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Popular Items</h2>
          <Link 
            to="/menu" 
            className="mt-2 sm:mt-0 text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            View Full Menu
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;