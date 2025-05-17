import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Home, UtensilsCrossed, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import ThemeToggle from '../shared/ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary-500"
        >
          <ShoppingBag className="w-8 h-8" />
          <span className="text-xl font-bold">FastBite</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" icon={<Home size={18} />} label="Home" />
          <NavLink to="/menu" icon={<UtensilsCrossed size={18} />} label="Menu" />
          <Link 
            to="/cart" 
            className="relative flex items-center justify-center"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-primary-500 text-white text-xs font-medium rounded-full">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-3 bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
            <NavLink 
              to="/" 
              isMobile 
              icon={<Home size={18} />} 
              label="Home" 
            />
            <NavLink 
              to="/menu" 
              isMobile 
              icon={<UtensilsCrossed size={18} />} 
              label="Menu" 
            />
            <NavLink 
              to="/cart" 
              isMobile 
              icon={<ShoppingCart size={18} />} 
              label="Cart" 
              badge={totalItems > 0 ? totalItems : undefined} 
            />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
  isMobile?: boolean;
  badge?: number;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon, isMobile, badge }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`
        ${isMobile ? 'flex items-center py-2 px-3 rounded-md w-full' : 'flex items-center gap-1 hover:text-primary-500'}
        ${isActive 
          ? `${isMobile ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500' : 'text-primary-500'} font-medium` 
          : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
        }
        transition-colors
      `}
    >
      {icon}
      <span>{label}</span>
      {badge !== undefined && (
        <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-primary-500 text-white rounded-full">
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </Link>
  );
};

export default Navbar;