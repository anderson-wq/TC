import { useState } from 'react';

const Transaction = () => {
  const [transactionDetails, setTransactionDetails] = useState({
    recipient: 'john.doe@example.com',
    amount: 0.0,
    status: 'Pending',
    transactionId: 'TX12345',
    walletAddress: '',
  });

  const [formData, setFormData] = useState({
    amount: '',
    recipient: '',
    walletAddress: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmitTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulating a transaction submission
    if (!formData.amount || !formData.recipient || !formData.walletAddress) {
      alert('Please fill in all fields.');
      return;
    }

    // Update the transaction status to "Completed"
    setTransactionDetails({
      ...transactionDetails,
      amount: parseFloat(formData.amount),
      recipient: formData.recipient,
      walletAddress: formData.walletAddress,
      status: 'Completed',
    });

    alert('Transaction confirmed!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Transaction Details</h1>
        <p className="text-gray-500 mt-1">Review and confirm your transaction details.</p>
      </div>

      {/* Transaction Info Table */}
      {/* <div className="bg-white shadow-md rounded-xl p-6 space-y-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Transaction Info</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Field</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 text-sm text-gray-600">Transaction ID</td>
              <td className="px-4 py-2 text-sm text-gray-600">{transactionDetails.transactionId}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-sm text-gray-600">Recipient</td>
              <td className="px-4 py-2 text-sm text-gray-600">{transactionDetails.recipient}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-sm text-gray-600">Amount</td>
              <td className="px-4 py-2 text-sm text-gray-600">{transactionDetails.amount} USD</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-sm text-gray-600">Wallet Address</td>
              <td className="px-4 py-2 text-sm text-gray-600">{transactionDetails.walletAddress}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm text-gray-600">Status</td>
              <td className="px-4 py-2 text-sm text-gray-600">{transactionDetails.status}</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Transaction Form */}
      <form onSubmit={handleSubmitTransaction} className="bg-white shadow-md rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Enter Transaction Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
              Recipient Email or Wallet Address
            </label>
            <input
              id="recipient"
              type="text"
              value={formData.recipient}
              onChange={handleInputChange}
              placeholder="Enter recipient email or wallet address"
              className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="0.0"
              className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700">
            Wallet Address
          </label>
          <input
            id="walletAddress"
            type="text"
            value={formData.walletAddress}
            onChange={handleInputChange}
            placeholder="Enter wallet address"
            className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => alert('Transaction has been cancelled.')}
            className="w-32 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-32 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Confirm Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transaction;
