import { FoodItem, Category, Banner } from '../types';

export const categories: Category[] = [
  { id: 'burgers', name: 'Burgers', icon: 'burger' },
  { id: 'pizza', name: 'Pizza', icon: 'pizza' },
  { id: 'sushi', name: 'Sushi', icon: 'fish' },
  { id: 'salads', name: 'Salads', icon: 'salad' },
  { id: 'desserts', name: 'Desserts', icon: 'cake' },
  { id: 'drinks', name: 'Drinks', icon: 'coffee' },
];

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burgers',
    popular: true,
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description: 'Traditional pizza with tomato sauce, fresh mozzarella, and basil',
    price: 14.99,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    popular: true,
  },
  {
    id: 3,
    name: 'California Roll',
    description: 'Crab, avocado, and cucumber wrapped in seaweed and rice',
    price: 9.99,
    image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'sushi',
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    vegetarian: true,
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten chocolate center',
    price: 7.99,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    vegetarian: true,
  },
  {
    id: 6,
    name: 'Iced Caramel Macchiato',
    description: 'Espresso with vanilla syrup, milk, and caramel drizzle over ice',
    price: 4.99,
    image: 'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    vegetarian: true,
  },
  {
    id: 7,
    name: 'Spicy Chicken Burger',
    description: 'Crispy chicken fillet with hot sauce, pickles, and coleslaw',
    price: 11.99,
    image: 'https://images.pexels.com/photos/7171000/pexels-photo-7171000.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burgers',
    spicy: true,
  },
  {
    id: 8,
    name: 'Pepperoni Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and pepperoni',
    price: 15.99,
    image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    popular: true,
  },
  {
    id: 9,
    name: 'Dragon Roll',
    description: 'Shrimp tempura and cucumber inside, topped with avocado and eel',
    price: 13.99,
    image: 'https://images.pexels.com/photos/3642718/pexels-photo-3642718.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'sushi',
    popular: true,
  },
  {
    id: 10,
    name: 'Greek Salad',
    description: 'Fresh cucumbers, tomatoes, olives, and feta cheese with olive oil',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'salads',
    vegetarian: true,
  },
  {
    id: 11,
    name: 'New York Cheesecake',
    description: 'Rich and creamy cheesecake with a graham cracker crust',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    vegetarian: true,
  },
  {
    id: 12,
    name: 'Strawberry Smoothie',
    description: 'Fresh strawberries blended with yogurt and honey',
    price: 5.99,
    image: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    vegetarian: true,
  },
];

export const banners: Banner[] = [
  {
    id: 1,
    title: 'Free Delivery on Your First Order',
    description: 'Use code WELCOME at checkout',
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/menu',
  },
  {
    id: 2,
    title: '20% Off All Burgers',
    description: 'Limited time offer',
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/menu?category=burgers',
  },
  {
    id: 3,
    title: 'New: Spicy Ramen Bowl',
    description: 'Try our latest menu addition',
    image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/menu',
  },
];

// Helper function to get popular items
export const getPopularItems = (): FoodItem[] => {
  return foodItems.filter(item => item.popular);
};

// Helper function to get items by category
export const getItemsByCategory = (category: string): FoodItem[] => {
  return foodItems.filter(item => item.category === category);
};