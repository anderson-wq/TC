import bitcoin from '../assets/2672335.jpg';
import userIcon from '../assets/user.png';
import investmentIcon from '../assets/investment.png';
import countriesIcon from '../assets/world.png';
import { Link } from 'react-router-dom';

const HomeKnowAbout = () => {
  return (
    <div className="overflow-x-hidden w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-sm font-medium uppercase text-gray-600">Who We Are</h1>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-800 text-center md:text-left">
            Know About Us
          </h2>
          <p className="text-[17px] mt-6 text-gray-700 leading-relaxed text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio alias
            similique nisi eum officiis nesciunt corrupti autem cum magnam.
          </p>
          <p className="text-[17px] mt-4 text-gray-700 leading-relaxed text-center md:text-left">
            Possimus a quasi id nobis? Non minus voluptate architecto culpa. Corrupti
            blanditiis, rerum illo quaerat iusto dolorem repudiandae tenetur.
          </p>

          <Link to="/about">
            <button className="py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold rounded-2xl mt-6 transition duration-300 ease-in-out transform hover:scale-105">
              Read More
            </button>
          </Link>

          {/* Statistics */}
          <div className="md:flex flex-col hidden sm:flex-row justify-center md:justify-start items-center gap-6 mt-10 w-full">
            {/* Users */}
            <div className="flex flex-row items-center gap-4">
              <img src={userIcon} alt="Users Icon" className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">58K</h3>
                <p className="text-gray-600">Happy Users</p>
              </div>
            </div>

            {/* Investments */}
            <div className="flex flex-row items-center gap-4">
              <img src={investmentIcon} alt="Investments Icon" className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">12K</h3>
                <p className="text-gray-600">Investments</p>
              </div>
            </div>

            {/* Countries */}
            <div className="flex flex-row items-center gap-4">
              <img src={countriesIcon} alt="Countries Icon" className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">80+</h3>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full">
          <img
            src={bitcoin}
            alt="Bitcoin illustration"
            className="w-full max-w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeKnowAbout;
