import React from 'react';
import { Plus, Leaf, Flame } from 'lucide-react';
import { FoodItem } from '../../types';
import { useCart } from '../../context/CartContext';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="card group overflow-hidden animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {item.vegetarian && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
              <Leaf size={12} />
              Veg
            </span>
          )}
          {item.spicy && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
              <Flame size={12} />
              Spicy
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">${item.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;