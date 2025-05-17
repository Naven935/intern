import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { FoodItem } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: FoodItem & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };
  
  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex py-4 border-b border-gray-200 animate-fade-in">
      {/* Item Image */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Item Details */}
      <div className="flex-grow ml-4">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="text-gray-500 text-sm line-clamp-1">{item.description}</p>
        
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">${item.price.toFixed(2)}</span>
          
          <div className="flex items-center">
            {/* Quantity Controls */}
            <div className="flex items-center border border-gray-300 rounded-md">
              <button 
                onClick={handleDecrement}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary-500 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              
              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>
              
              <button 
                onClick={handleIncrement}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary-500 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
            
            {/* Remove Button */}
            <button 
              onClick={handleRemove}
              className="ml-2 p-2 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;