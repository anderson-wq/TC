import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import bitcoin from '../assets/bitcoin.png';
import { getAuth, signOut } from 'firebase/auth';

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext) || {}; // Safe fallback if context is undefined
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook for redirection

  useEffect(() => {
    const auth = getAuth();
    signOut(auth); // Force sign out when visiting login
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset error before submitting

    if (login) {
      // Check if login is defined
      try {
        await login(email, password); // Call the login function if it exists
        navigate('/dashboard'); // Only navigate if login is successful
      } catch (err: unknown) {
        // Type check the error to make sure it's an instance of Error
        if (err instanceof Error) {
          setError(err.message); // Display error message from the login function
        } else {
          setError('An unexpected error occurred.');
        }
      }
    } else {
      setError('Login function is not available.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  rounded-lg  overflow-hidden w-full max-w-5xl">
        <div className="p-8 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Sign in to Trueston capital
            </h1>
            <p className="text-gray-600">Turn Your Idea Into Reality</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-yellow-600" />
                <span>Remember Me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-yellow-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Error Display */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Not registered yet?{' '}
            <Link to="/signup" className="text-yellow-600 hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src={bitcoin}
            alt="Bitcoin Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
