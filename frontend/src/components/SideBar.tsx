import { NavLink, Link } from 'react-router-dom';
import { Home, PieChart, LogOut, Menu, X } from 'lucide-react';
import logo from '../assets/logo3.png';
import { useAuth } from '../context/useAuth';
import { useState } from 'react';

const SideBar = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // close sidebar after click (on mobile)
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-8 right-6 z-50 w-10 h-10 text-white bg-blue-600 p-2 rounded-full"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-blue-900 text-white z-40 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} onClick={toggleSidebar}
      >
        {/* Top Section */}
        <div className="p-6">
          <div className="flex items-center mb-10">
            <Link to="/" onClick={handleLinkClick}>
              <img src={logo} alt="logo" className="w-full h-10 mr-2" />
            </Link>
          </div>

          <div className="space-y-1 text-sm">
            <p className="text-gray-400 mb-2 uppercase tracking-wide">General</p>
            <NavItem
              to="/dashboard"
              label="Dashboard"
              icon={<Home size={18} />}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/dashboard/transaction"
              label="Transaction"
              icon={<PieChart size={18} />}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/dashboard/transfer"
              label="Invest"
              icon={<Home size={18} />}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/dashboard/recieve"
              label="Request Fund"
              icon={<PieChart size={18} />}
              onClick={handleLinkClick}
            />
            <NavItem
              to="/dashboard/investment"
              label="Plan"
              icon={<Home size={18} />}
              onClick={handleLinkClick}
            />
            {/* <NavItem
              to="/dashboard/setting"
              label="Settings"
              icon={<Settings size={18} />}
              onClick={handleLinkClick}
            /> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6 border-t border-blue-800">
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="text-white px-3 py-1 rounded text-sm flex items-center gap-2"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const NavItem = ({ to, label, icon, onClick }: NavItemProps) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
        isActive
          ? 'bg-yellow-500 text-white'
          : 'text-gray-300 hover:bg-yellow-400 hover:text-white'
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default SideBar;
