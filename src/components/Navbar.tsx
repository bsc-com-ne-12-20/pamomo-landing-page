import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
    return isHomePage ? (
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        spy={true}
        className="text-white hover:text-gray-200 px-3 py-2 cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </ScrollLink>
    ) : (
      <RouterLink
        to={`/#${to}`}
        className="text-white hover:text-gray-200 px-3 py-2"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </RouterLink>
    );
  };

  // Apply solid background if not on homepage or if scrolled
  const navBackground = (!isHomePage || scrolled) ? 'bg-[#8928a4] shadow-lg' : 'bg-transparent';

  return (
    <nav className={`fixed w-full z-50 ${navBackground} transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <RouterLink to="/" className="text-white font-bold text-xl">
            Pamomo
          </RouterLink>

          <div className="hidden md:flex space-x-4">
            <NavLink to="features" label="Features" />
            <NavLink to="how-it-works" label="How It Works" />
            <NavLink to="pricing" label="Pricing" />
            <NavLink to="merchant" label="For Merchants" />
            <NavLink to="faq" label="FAQ" />
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#8928a4]">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <NavLink to="features" label="Features" />
            <NavLink to="how-it-works" label="How It Works" />
            <NavLink to="pricing" label="Pricing" />
            <NavLink to="merchant" label="For Merchants" />
            <NavLink to="faq" label="FAQ" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;