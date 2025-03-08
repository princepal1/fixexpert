
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-purple rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">EF</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">EasyFix</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-900 hover:text-purple transition-colors">
              Home
            </Link>
            <Link to="/ac-service" className="text-sm font-medium text-gray-900 hover:text-purple transition-colors">
              AC Conditioner Service
            </Link>
            <Link to="/washing-machine" className="text-sm font-medium text-gray-900 hover:text-purple transition-colors">
              Washing Machine
            </Link>
            <Link to="/services" className="text-sm font-medium text-gray-900 hover:text-purple transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-purple transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-900 hover:text-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
