import { Link } from 'react-router-dom';
import bitcoin from '../assets/bitcoin.png';

const HomeHeroSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center md:px-10 items-center h-[35rem] bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden mt-10">
        {/* Right Side */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Invest for Future in</h1>
          <h1 className="text-5xl font-bold mt-2">Stable Platform</h1>
          <p className="text-[15px] mt-5">
            Make a profitable business from these niches. Grow your profit
          </p>
          <p className="text-[15px] mt-2">
            Invest now. See The Platform, Feel The Shine
          </p>
          <div className="flex flex-row gap-2 mt-5 justify-center md:justify-start">
            <Link to="login" className="bg-yellow-500 py-4 px-8 rounded-2xl hover:bg-yellow-400 transition-all">
              Get Started
            </Link>
          
          </div>
        </div>
        {/* Left Side */}
        <div className="hidden md:block">
          <img src={bitcoin} alt="Bitcoin illustration" className="w-[50rem]" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
