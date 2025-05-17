import React from 'react';
import { Link } from 'react-router-dom';
import { Merge as Burger, Pizza, Fish, Salad, Coffee, Cake } from 'lucide-react';
import { Category } from '../../types';

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  // Map category icons to their components
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'burger':
        return <Burger className="w-6 h-6" />;
      case 'pizza':
        return <Pizza className="w-6 h-6" />;
      case 'fish':
        return <Fish className="w-6 h-6" />;
      case 'salad':
        return <Salad className="w-6 h-6" />;
      case 'coffee':
        return <Coffee className="w-6 h-6" />;
      case 'cake':
        return <Cake className="w-6 h-6" />;
      default:
        return <Burger className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center">Food Categories</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/menu?category=${category.id}`}
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-50 text-primary-500 mb-3 group-hover:bg-primary-100 transition-colors">
                {getCategoryIcon(category.icon)}
              </div>
              <span className="font-medium text-gray-800 group-hover:text-primary-500 transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;