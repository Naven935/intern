import React from 'react';
import { Link } from 'react-router-dom';

interface OrderSummaryProps {
  subtotal: number;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  isCheckout?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  buttonText = 'Proceed to Checkout',
  buttonLink = '/checkout',
  onButtonClick,
  isCheckout = false,
}) => {
  const deliveryFee = 3.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + deliveryFee + tax;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {buttonText && (
        isCheckout ? (
          <button
            onClick={onButtonClick}
            className="btn btn-primary w-full"
            disabled={subtotal === 0}
          >
            {buttonText}
          </button>
        ) : (
          <Link
            to={buttonLink}
            className={`btn btn-primary w-full text-center ${subtotal === 0 ? 'opacity-50 pointer-events-none' : ''}`}
            onClick={onButtonClick}
          >
            {buttonText}
          </Link>
        )
      )}
    </div>
  );
};

export default OrderSummary;