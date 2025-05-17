import { useState, useEffect } from 'react';
import { FoodItem } from '../types';
import { foodItems } from '../data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function useFoodItems(categoryId?: string) {
  const [items, setItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call
        await delay(1000);
        
        const filteredItems = categoryId
          ? foodItems.filter(item => item.category === categoryId)
          : foodItems;
        
        setItems(filteredItems);
      } catch (err) {
        setError('Failed to fetch food items');
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, [categoryId]);

  return { items, loading, error };
}