const WhyChooseUs = () => {
    return (
      <div className="bg-gray-50 py-12 px-6 md:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold mb-4">Why Choose Us?</h1>
          <p className="text-lg text-gray-600">
            We provide the best investment solutions tailored to your needs. Here are a few reasons why you should choose us.
          </p>
        </div>
  
        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">1. Trusted and Secure</h2>
            <p className="text-gray-600">
              We prioritize the security of your funds. Our platform is built with the latest encryption standards to keep your investments safe.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">2. High Returns</h2>
            <p className="text-gray-600">
              Enjoy competitive returns on your investment with our carefully crafted plans designed to maximize your profits.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">3. Easy to Use</h2>
            <p className="text-gray-600">
              Our platform is user-friendly and intuitive, making it easy for both beginners and experienced investors to navigate.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">4. 24/7 Customer Support</h2>
            <p className="text-gray-600">
              Our dedicated customer support team is always available to assist you with any questions or concerns you may have.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">5. Flexible Plans</h2>
            <p className="text-gray-600">
              Choose from a variety of investment plans tailored to suit your financial goals and risk tolerance.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">6. Transparency</h2>
            <p className="text-gray-600">
              We maintain full transparency in all our dealings. You can track your investments and returns in real-time.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;
  