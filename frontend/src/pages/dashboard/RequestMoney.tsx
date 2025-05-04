
const RequestMoney = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
     
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Request Money</h1>
        <p className="text-gray-500 mt-1">
          Send a money request to someone's wallet or email.
        </p>
      </div>

      {/* Form */}
      <form className="bg-white shadow-md rounded-xl p-6 space-y-6">
        {/* Requester Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="requestFrom" className="block text-sm font-medium text-gray-700">
              Request From (Email or Username)
            </label>
            <input
              id="requestFrom"
              type="text"
              placeholder="Enter email or username"
              className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">
              Wallet
            </label>
            <select
              id="wallet"
              name="wallet"
              className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select wallet</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="usdt">USDT</option>
            </select>
          </div>
        </div>

        {/* Wallet Address Input */}
        <div>
          <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700">
            Wallet Address
          </label>
          <input
            id="walletAddress"
            type="text"
            placeholder="Enter wallet address"
            className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Amount and Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              placeholder="0.0"
              className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="note" className="block text-sm font-medium text-gray-700">
              Note (Optional)
            </label>
            <input
              id="note"
              type="text"
              placeholder="e.g. Rent, Gift, Payment"
              className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Info box */}
        <div className="bg-yellow-50 text-yellow-800 p-4 rounded-md text-sm">
          📩 The user will receive a notification of your request.
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all"
          >
            Request Money
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestMoney;
