import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bitcoin from '../assets/bitcoin.png';
import { AuthContext } from '../context/AuthContext';

const SignUpPage: React.FC = () => {
  const { register } = useContext(AuthContext) || {};
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  
    if (!register) {
      setError("Register function is not available.");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    try {
      // Pass the fullName to register
      await register(email, password, fullName);
      console.log("Registering user with email:", email);
      navigate('/login'); 
      // optionally redirect after signup
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
        <div className="p-8 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Create Your Account</h1>
            <p className="text-gray-600">Join Trueston capital and start growing</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-type your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="hidden md:block">
          <img src={bitcoin} alt="Bitcoin Illustration" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
