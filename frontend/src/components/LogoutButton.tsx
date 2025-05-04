import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext)!;

  const handleLogout = async () => {
    try {
      await logout();
      // Optionally redirect to login
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <button onClick={handleLogout} className="text-sm text-red-500 hover:underline">
      Logout
    </button>
  );
};

export default LogoutButton;
