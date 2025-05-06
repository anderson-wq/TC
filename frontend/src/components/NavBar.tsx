import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // ✅ REACT ICONS
import logo from '../assets/logo3.png';
import { useAuth } from '../context/useAuth';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = async () => {
    try {
      await logout();
      setIsMobileMenuOpen(false);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-yellow-400 font-semibold transition-all duration-300'
      : 'text-white hover:text-yellow-400 transition-all duration-300';

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-600 px-6 py-4 text-white fixed top-0 right-0 left-0 z-50 shadow-lg">
      {/* Logo */}
      <Link to="/">
        <div>
          <img src={logo} alt="logo" className="w-16" />
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/plan" className={navLinkClass}>
          Plans
        </NavLink>

        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-yellow-300 py-2 px-4 rounded-2xl text-black"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="bg-yellow-300 py-2 px-4 rounded-2xl text-black"
          >
            Login Now
          </NavLink>
        )}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-3xl"
          aria-label="Toggle mobile menu"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0  left-0 right-0 bottom-0 w-full h-screen bg-gray-900 text-white p-6 z-50 md:hidden overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <img src={logo} alt="logo" className="w-10" />
            <button
              onClick={toggleMobileMenu}
              className="text-white text-3xl"
              aria-label="Close mobile menu"
            >
              <HiX />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-lg">
            <NavLink to="/" className={navLinkClass} onClick={toggleMobileMenu}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/plan"
              className={navLinkClass}
              onClick={toggleMobileMenu}
            >
              Plans
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={toggleMobileMenu}
            >
              Contact
            </NavLink>

            {user ? (
              <button
                onClick={handleLogout}
                className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-md text-black"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={toggleMobileMenu}
                className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-md text-black"
              >
                Login Now
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
