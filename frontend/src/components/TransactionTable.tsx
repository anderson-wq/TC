import React from 'react';

type Transaction = {
  date: string;
  transactionNumber: string;
  method: string;
  accountNumber: string;
  amount: string;
  status: 'Successful' | 'Pending' | 'Failed';
};

const transactions: Transaction[] = [
  {
    date: '2025-04-10',
    transactionNumber: 'BTC-TXN001',
    method: 'Crypto',
    accountNumber: 'bc1qabc001',
    amount: '$1,000',
    status: 'Successful',
  },
  {
    date: '2025-04-11',
    transactionNumber: 'BTC-TXN002',
    method: 'Crypto',
    accountNumber: 'bc1qabc002',
    amount: '$2,500',
    status: 'Successful',
  },
  {
    date: '2025-04-12',
    transactionNumber: 'BTC-TXN003',
    method: 'Crypto',
    accountNumber: 'bc1qabc003',
    amount: '$3,200',
    status: 'Successful',
  },
  {
    date: '2025-04-13',
    transactionNumber: 'BTC-TXN004',
    method: 'Crypto',
    accountNumber: 'bc1qabc004',
    amount: '$800',
    status: 'Successful',
  },
  {
    date: '2025-04-14',
    transactionNumber: 'BTC-TXN005',
    method: 'Crypto',
    accountNumber: 'bc1qabc005',
    amount: '$1,450',
    status: 'Successful',
  },
  {
    date: '2025-04-15',
    transactionNumber: 'BTC-TXN006',
    method: 'Crypto',
    accountNumber: 'bc1qabc006',
    amount: '$2,200',
    status: 'Successful',
  },
  {
    date: '2025-04-16',
    transactionNumber: 'BTC-TXN007',
    method: 'Crypto',
    accountNumber: 'bc1qabc007',
    amount: '$1,750',
    status: 'Successful',
  },
  {
    date: '2025-04-17',
    transactionNumber: 'BTC-TXN008',
    method: 'Crypto',
    accountNumber: 'bc1qabc008',
    amount: '$900',
    status: 'Successful',
  },
  {
    date: '2025-04-18',
    transactionNumber: 'BTC-TXN009',
    method: 'Crypto',
    accountNumber: 'bc1qabc009',
    amount: '$1,300',
    status: 'Successful',
  },
  {
    date: '2025-04-19',
    transactionNumber: 'BTC-TXN010',
    method: 'Crypto',
    accountNumber: 'bc1qabc010',
    amount: '$1,900',
    status: 'Successful',
  },
];

const TransactionTable: React.FC = () => {
  const btcSuccessTxns = transactions
    .filter((txn) => txn.method === 'Crypto' && txn.status === 'Successful')
    .slice(0, 10); // Limit to 10 if needed

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">BTC Successful Transactions</h2>
      <table className="min-w-full bg-white border border-gray-200 shadow-sm">
        <thead>
          <tr className="bg-gray-200 text-gray-800 text-left text-sm uppercase">
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Transaction ID</th>
            <th className="py-3 px-4 border-b">Wallet Address</th>
            <th className="py-3 px-4 border-b">Amount</th>
            <th className="py-3 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {btcSuccessTxns.map((txn, index) => (
            <tr
              key={index}
              className="text-sm text-gray-800 hover:bg-gray-100 transition"
            >
              <td className="py-3 px-4 border-b">{txn.date}</td>
              <td className="py-3 px-4 border-b">{txn.transactionNumber}</td>
              <td className="py-3 px-4 border-b">{txn.accountNumber}</td>
              <td className="py-3 px-4 border-b">{txn.amount}</td>
              <td className="py-3 px-4 border-b font-medium bg-green-100 text-green-700">
                {txn.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
