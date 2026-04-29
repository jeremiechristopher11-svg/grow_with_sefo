import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/episodes', label: 'Épisodes' },
    { path: '/animatrice', label: "L'animatrice" },
    { path: '/fas-a-fas', label: 'Fas A Fas' },
    { path: '/evenements', label: 'Événements' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.jpg"
              alt="Grow With Sepho"
              className="h-10 w-auto rounded-lg"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-pink bg-brand-pink/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
                {item.label === 'Fas A Fas' && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-brand-pink text-white rounded">
                    NEW
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Subscribe Button */}
          <NavLink
            to="/subscribe"
            className="hidden md:block px-6 py-2.5 bg-brand-pink hover:bg-brand-pink-light text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-pink/30"
          >
            S'abonner
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-pink bg-brand-pink/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                  {item.label === 'Fas A Fas' && (
                    <span className="ml-2 px-1.5 py-0.5 text-xs bg-brand-pink text-white rounded">
                      NEW
                    </span>
                  )}
                </NavLink>
              ))}
              <NavLink
                to="/subscribe"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-brand-pink text-white font-medium rounded-full text-center"
              >
                S'abonner
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
