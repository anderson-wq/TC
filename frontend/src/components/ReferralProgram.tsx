import referral from '../assets/6914322.jpg'
const ReferralProgram = () => {
    return (
      <div className="bg-gray-50 py-12 px-6 md:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold mb-4">Referral Program</h1>
          <p className="text-lg text-gray-600">
            Refer a friend and earn money! It's that simple. Start earning rewards for each successful referral today.
          </p>
        </div>
  
        {/* Two Column Grid: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Referral Program Details */}
          <div className="flex flex-col justify-center items-start p-6 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Step 1: Share Your Referral Link</h3>
                <p className="text-gray-600">
                  Share your unique referral link with your friends via email, social media, or any other platform.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Step 2: Friend Signs Up</h3>
                <p className="text-gray-600">
                  When your friend clicks your referral link and signs up, they will automatically be linked to your referral account.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Step 3: Earn Rewards</h3>
                <p className="text-gray-600">
                  You will earn money every time your friend makes an investment or completes a qualifying action. The more friends you refer, the more you earn!
                </p>
              </div>
            </div>
          </div>
  
          {/* Right: Referral Image */}
          <div className="flex justify-center items-center">
            <img
              src={referral} // Replace with your image URL
              alt="Referral Program"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
  
        {/* Referral Benefits */}
        <div className="text-center my-12">
          <h2 className="text-2xl font-semibold mb-4">Why Refer Your Friends?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Earn Money</h3>
              <p className="text-gray-600">
                For every successful referral, you earn a commission. The more friends you refer, the higher your earnings.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Help Your Friends</h3>
              <p className="text-gray-600">
                By referring your friends, you're helping them discover a great investment opportunity with amazing returns.
              </p>
            </div>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Start Referring Now!</h2>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded-xl">
            Get Your Referral Link
          </button>
        </div>
      </div>
    );
  };
  
  export default ReferralProgram;
  