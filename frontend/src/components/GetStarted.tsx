import started from '../assets/2853466.jpg';
const GetStarted = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-20 bg-white">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start p-6 md:p-10">
        <h1 className="text-3xl font-semibold mb-4">How To Get Started</h1>
        <h1 className="text-4xl font-bold mb-8">We have some easy steps!</h1>

        <div className="flex flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl">Create Account</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, odio.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">01</h1>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl">Purchase an Investment Plan</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, odio.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">02</h1>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl">Get Profit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, odio.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">03</h1>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div>
        <img
          src={started} // Replace with your image source
          alt="Getting Started"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default GetStarted;
