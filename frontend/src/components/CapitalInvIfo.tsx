const CapitalInvInfo = () => {
    return (
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm uppercase text-gray-500 tracking-wide font-semibold">
            About Us
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-6">
            Welcome to Truestoncapital
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Capital Inv is a trusted investment company focused on helping individuals and businesses grow their financial potential. With years of industry experience, innovative strategies, and a commitment to excellence, we empower our clients to make smarter investment choices and build sustainable wealth.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
          {/* Core Values */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Transparency</h3>
            <p className="text-gray-600">
              We believe in honest, clear communication. Our clients stay informed every step of the way.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Security</h3>
            <p className="text-gray-600">
              Your investments are protected with world-class security and reliable technology.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Growth</h3>
            <p className="text-gray-600">
              We aim to help you maximize returns and reach your financial goals faster and smarter.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CapitalInvInfo;
  