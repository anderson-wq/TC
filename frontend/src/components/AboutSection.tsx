import bitcoin from '../assets/2672335.jpg';
import userIcon from '../assets/user.png'; // Import icon for users
import investmentIcon from '../assets/investment.png'; // Import icon for investments
import countriesIcon from '../assets/world.png'; // Import icon for countries

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-100 items-center">
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          src={bitcoin}
          alt="Bitcoin Illustration"
          className="w-64 md:w-96 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </div>

      {/* Right Text */}
      <div>
        <p className="text-sm uppercase text-gray-500 font-semibold mb-2">
          Who We Are
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Know About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a dedicated investment platform focused on helping you grow
          your financial future. Our expert team ensures that your money works
          for you, through secure and profitable plans tailored to your goals.
        </p>

        <div className="flex flex-row justify-center md:justify-start items-center gap-10 mt-10 flex-wrap">
          {/* One - Happy Users */}
          <div className="flex flex-row items-center gap-4">
            <img
              src={userIcon}
              alt="Users Icon - Happy Users"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-bold">58K</h1>
              <p className="text-gray-600">Happy Users</p>
            </div>
          </div>

          {/* Two - Investments */}
          <div className="flex flex-row items-center gap-4">
            <img
              src={investmentIcon}
              alt="Investment Icon - Total Investments"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-bold">12K</h1>
              <p className="text-gray-600">Investments</p>
            </div>
          </div>

          {/* Three - Countries */}
          <div className="flex flex-row items-center gap-4">
            <img
              src={countriesIcon}
              alt="World Icon - Countries Served"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-bold">80+</h1>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
