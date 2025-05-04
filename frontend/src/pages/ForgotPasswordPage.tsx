import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth'; // Adjust the path as needed
import bitcoin from '../assets/bitcoin.png';

const ForgotPasswordPage: React.FC = () => {
  const { resetPassword, error, setError } = useAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage('');

    try {
      await resetPassword(email); 
      setMessage('Password reset email sent! Check your inbox.');
    } catch {
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        {/* Left Section - Form */}
        <div className="p-8 flex flex-col justify-center">
          {/* Logo and Heading */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Forgot Password?
            </h1>
            <p className="text-gray-600">
              Enter your email and we’ll send you a reset link.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Send Reset Link
            </button>
          </form>

          {/* Success/Error Messages */}
          {message && <p className="text-green-600 text-sm text-center">{message}</p>}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          {/* Back to Login */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Remembered your password?{' '}
            <Link to="/login" className="text-yellow-600 hover:underline">
              Go back to Login
            </Link>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block">
          <img
            src={bitcoin}
            alt="Reset Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
