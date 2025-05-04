import { Link } from 'react-router-dom';

const GetStartedBanner = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-6 text-center shadow-lg">
      <h2 className="text-4xl font-semibold mb-6">Get Started with Us!</h2>
      <p className="text-lg mb-8 max-w-lg mx-auto">
        Join our platform today and start enjoying amazing benefits. It's easy
        to begin—get started now!
      </p>

      <Link
        to="login"
        className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-yellow-400 hover:shadow-xl transition-all duration-300"
      >
        {' '}
        Start Now
      </Link>
    </div>
  );
};

export default GetStartedBanner;
