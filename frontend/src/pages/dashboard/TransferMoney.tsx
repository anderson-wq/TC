import { useNavigate } from 'react-router-dom';

const TransferMoney = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Choose Transfer Method
        </h1>
        <p className="text-gray-500 mt-2">How would you like to send money?</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1  gap-6">
        {/* Bank Transfer */}
        {/* <div
          onClick={() => handleOptionClick('fund')}
          className="cursor-pointer bg-white shadow hover:shadow-lg transition rounded-xl p-6 border border-gray-200 hover:border-blue-600"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">🏦</div>
            <div>
              <h2 className="text-xl font-semibold">Bank Transfer</h2>
              <p className="text-gray-500 text-sm">
                Send money directly to a bank account.
              </p>
            </div>
          </div>
        </div> */}

        {/* Crypto Transfer */}
        <div
          onClick={() => handleOptionClick('crypto')}
          className="cursor-pointer bg-white shadow hover:shadow-lg transition rounded-xl p-6 border border-gray-200 hover:border-green-600"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              🪙
            </div>
            <div>
              <h2 className="text-xl font-semibold">Crypto Transfer</h2>
              <p className="text-gray-500 text-sm">
                Send funds via Bitcoin, Ethereum, USDT, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferMoney;
