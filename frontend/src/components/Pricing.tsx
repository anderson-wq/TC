import { Link } from 'react-router-dom';

const Pricing = () => {
  const packages = [
    {
      name: 'Standard Plan',
      price: '$1,000',
      profit: '10%',
      duration: '14 Days',
      features: ['Account Manager', 'Quick Support'],
      bg: 'bg-gray-200',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-yellow-500',
    },
    {
      name: 'Advanced Plan',
      price: '$2,000',
      profit: '12%',
      duration: '20 Days',
      features: ['Priority Withdrawal', 'Referral Earnings'],
      bg: 'bg-gray-200',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-purple-500',
    },
    {
      name: 'Premium Plan',
      price: '$5,000',
      profit: '15%',
      duration: '30 Days',
      features: ['VIP Support', 'Bonus Offers'],
      bg: 'bg-gray-200',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-pink-500',
    },
    {
      name: 'Elite Plan',
      price: '$10,000',
      profit: '18%',
      duration: '40 Days',
      features: ['Dedicated Advisor', 'Premium Returns'],
      bg: 'bg-gray-200',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-indigo-500',
    },
    {
      name: 'Pro Plan',
      price: '$20,000',
      profit: '20%',
      duration: '45 Days',
      features: ['Early Payout Option', 'High Return'],
      bg: 'bg-gray-200',
      buttonBg: 'bg-black',
      buttonHover: 'hover:bg-red-500',
    },
  ];

  return (
    <div className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
        Best Investment Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md transition-all transform hover:scale-105 ${pkg.bg} hover:shadow-lg`}
          >
            <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
            <p className="text-2xl font-semibold mt-2 text-gray-800">
              {pkg.price}
            </p>
            <p className="text-lg mt-1 text-gray-700">Profit: {pkg.profit}</p>
            <p className="text-sm text-gray-600 mb-4">
              Duration: {pkg.duration}
            </p>
            <ul className="mb-4 space-y-1 text-sm text-gray-700">
              {pkg.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <Link to="login">
              <button
                className={`w-full ${pkg.buttonBg} text-white py-2 rounded ${pkg.buttonHover} focus:ring-2 focus:ring-opacity-50`}
              >
                Get Started
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
