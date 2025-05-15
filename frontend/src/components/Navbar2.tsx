import { useAuth } from '../context/useAuth';

const Navbar2 = () => {
  const { user } = useAuth(); // Access user from context
  const username = user?.displayName || user?.email?.split('@')[0] || 'Guest';

  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-blue-900 shadow-md p-4 flex items-center justify-between">
      {/* Left Section (Logo or Name) */}
      <div className="text-white font-bold text-xl">Dashboard</div>

      {/* Right Section: User Avatar & Name */}
      <div className="flex items-center gap-4">
        {/* Avatar with Initials */}
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm mr-10 md:mr-0">
          {username.charAt(0).toUpperCase()}
        </div>

        <h1 className="text-white hidden md:flex font-medium">{username}</h1>
      </div>
    </header>
  );
};

export default Navbar2;
