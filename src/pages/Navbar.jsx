import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [usdOpen, setUsdOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  // Refs for click outside close
  const usdRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdown/menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (usdRef.current && !usdRef.current.contains(event.target)) {
        setUsdOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/" className="text-2xl font-bold text-green-600">
            JETSIM
          </Link>

          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-gray-700 text-sm font-semibold">
          <Link to="/esim-plans" className="hover:text-green-600 transition">Home</Link>
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
          <Link to="/blog" className="hover:text-green-600 transition">Blog</Link>
          <Link to="/manage-esims" className="hover:text-green-600 transition">Manage ESIMs</Link>
          <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
        </div>

        {/* Desktop Right Side - Currency + Buy Now */}
        <div className="hidden lg:flex items-center gap-6">
          {/* USD Dropdown */}
          <div ref={usdRef} className="relative">
            <button
              onClick={() => setUsdOpen(!usdOpen)}
              className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-green-600 transition"
            >
              {selectedCurrency} <ChevronDown size={16} className={`transition ${usdOpen ? 'rotate-180' : ''}`} />
            </button>
            {usdOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50">
                {['USD', 'EUR', 'GBP', 'JPY'].map(curr => (
                  <button
                    key={curr}
                    onClick={() => {
                      setSelectedCurrency(curr);
                      setUsdOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition"
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/plans"
            className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700 transition shadow-md"
          >
            Buy Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={menuRef} className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-6">
            <Link to="/esim-plans" className="block text-lg text-gray-700 hover:text-green-600 transition" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block text-lg text-gray-700 hover:text-green-600 transition" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/blog" className="block text-lg text-gray-700 hover:text-green-600 transition" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/contact" className="block text-lg text-gray-700 hover:text-green-600 transition" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            <div className="pt-4 border-t">
              <Link
                to="/plans"
                className="block w-full text-center bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;