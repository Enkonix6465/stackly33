import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-dark.png';

const Header = () => {
  const navigate = useNavigate();
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const homeDropdownTimeout = useRef();
  const servicesDropdownTimeout = useRef();
  const [theme, setTheme] = useState('light');

  // Initial theme setup
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, []);

  // Sync theme with localStorage and document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event('theme-changed'));
  }, [theme]);

  // Listen for theme changes from other tabs/pages
  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
    };
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  // Get user initials
  const getInitials = () => {
    const firstname = (localStorage.getItem('firstname') || '').trim();
    const lastname = (localStorage.getItem('lastname') || '').trim();
    let initials = '';
    if (firstname) initials += firstname[0].toUpperCase();
    if (lastname) initials += lastname[0].toUpperCase();
    return initials || '?';
  };

  const email = (localStorage.getItem('email') || '').trim();
  const initials = getInitials();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#000] border-b border-[#141B25]' : 'bg-white border-b border-gray-200'}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-4 sm:pl-6 lg:pl-14 items-center">
            <button onClick={() => navigate('/home1')} className="focus:outline-none">
              <img src={logo} alt="STACKLY" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden min-[480px]:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { if (homeDropdownTimeout.current) clearTimeout(homeDropdownTimeout.current); setIsHomeDropdownOpen(true); }}
              onMouseLeave={() => { homeDropdownTimeout.current = setTimeout(() => setIsHomeDropdownOpen(false), 200); }}
            >
              <button
                onClick={() => navigate('/home1')}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-green-500 transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isHomeDropdownOpen}
              >
                Home
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isHomeDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <Link to="/home1" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>Home 1</Link>
                  <Link to="/home2" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>Home 2</Link>
                </div>
              )}
            </div>

            <Link to="/about" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-green-500 transition-colors duration-200`}>About Us</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current); setIsServicesDropdownOpen(true); }}
              onMouseLeave={() => { servicesDropdownTimeout.current = setTimeout(() => setIsServicesDropdownOpen(false), 200); }}
            >
              <button
                onClick={() => navigate('/services')}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-green-500 transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <Link to="/services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>All Services</Link>
                  <Link to="/Nutrition" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Personalized Nutrition</Link>
                  <Link to="/Mindful" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Mindful Movement</Link>
                  <Link to="/Sleep" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Sleep Optimization</Link>
                  <Link to="/Stress" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Stress Resilience</Link>
                  <Link to="/Holistic" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Holistic Detox</Link>
                  <Link to="/Wellness" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-green-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Wellness Coaching</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-green-500 transition-colors duration-200`}>Blog</Link>
            <Link to="/contact" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-green-500 transition-colors duration-200`}>Contact Us</Link>

            {/* Dark Mode Toggle */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-green-100 border-green-300 hover:bg-green-200'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar Dropdown */}
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold focus:outline-none"
                onClick={() => setIsAvatarDropdownOpen(prev => !prev)}
              >
                {initials}
              </button>
              {isAvatarDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  {email === 'admin@enkonix.in' && (
                    <button
                      className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-green-500' : 'text-gray-800 hover:bg-green-100'}`}
                      onClick={() => { setIsAvatarDropdownOpen(false); navigate('/admindashboard'); }}
                    >
                      Back to Admin Dashboard
                    </button>
                  )}
                  {email && email !== 'admin@enkonix.in' && (
                    <button
                      className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-green-500' : 'text-gray-800 hover:bg-green-100'}`}
                      onClick={() => { setIsAvatarDropdownOpen(false); navigate('/userdashboard'); }}
                    >
                      User Dashboard
                    </button>
                  )}
                  <button
                    className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-green-500' : 'text-gray-800 hover:bg-green-100'}`}
                    onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu & Icons */}
          {/* Keep your existing mobile menu code here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
