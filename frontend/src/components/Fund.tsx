import { useState } from 'react';

const bankDetails = {
  access: {
    name: 'Access Bank',
    accountNumber: '0690123456',
    accountName: 'Fund Wallet Ltd',
  },
  uba: {
    name: 'UBA',
    accountNumber: '1012345678',
    accountName: 'Fund Wallet Ltd',
  },
  gtbank: {
    name: 'GTBank',
    accountNumber: '0123456789',
    accountName: 'Fund Wallet Ltd',
  },
};

const Fund = () => {
  const [selectedBank, setSelectedBank] = useState('');

  const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBank(e.target.value);
  };

  const bank = bankDetails[selectedBank as keyof typeof bankDetails];

  const handleConfirmation = () => {
    alert("Thank you! You've confirmed that the funds have been sent.");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Transfer Funds</h1>
        <p className="text-gray-500 mt-1">
          Please make the transfer to the bank account details below.
        </p>
      </div>

      {/* Bank Select */}
      <div className="mb-6">
        <label htmlFor="bank" className="block text-sm font-medium text-gray-700">
          Select Bank
        </label>
        <select
          id="bank"
          value={selectedBank}
          onChange={handleBankChange}
          className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose Bank --</option>
          <option value="access">Access Bank</option>
          <option value="uba">UBA</option>
          <option value="gtbank">GTBank</option>
        </select>
      </div>

      {/* Bank Account Detail Display */}
      {selectedBank && bank && (
        <div className="p-4 mt-4 bg-gray-100 rounded-md border border-gray-300 text-sm text-gray-700">
          <p><strong>Bank:</strong> {bank.name}</p>
          <p><strong>Account Number:</strong> {bank.accountNumber}</p>
          <p><strong>Account Name:</strong> {bank.accountName}</p>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-blue-50 text-blue-800 p-4 rounded-md text-sm mt-6">
        Ensure you send the correct amount to the account above. Transfers are processed instantly and cannot be reversed.
      </div>

      {/* Confirmation Button */}
      {selectedBank && (
        <div className="mt-6">
          <button
            onClick={handleConfirmation}
            className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all"
          >
            I've Sent The Funds
          </button>
        </div>
      )}
    </div>
  );
};

export default Fund;
