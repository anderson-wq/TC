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
    date: '2025-03-28',
    transactionNumber: 'BTC-TXN001',
    method: 'Crypto',
    accountNumber: 'bc1q4xv3jd89ksg56n2l7',
    amount: '$1,000',
    status: 'Successful',
  },
  {
    date: '2025-04-01',
    transactionNumber: 'BTC-TXN002',
    method: 'Crypto',
    accountNumber: 'bc1q7g9d3kz4msy81a5xp',
    amount: '$2,450',
    status: 'Successful',
  },
  {
    date: '2025-04-05',
    transactionNumber: 'BTC-TXN003',
    method: 'Crypto',
    accountNumber: 'bc1q2h4e0l9vkjr38n5zw',
    amount: '$3,275',
    status: 'Successful',
  },
  {
    date: '2025-04-08',
    transactionNumber: 'BTC-TXN004',
    method: 'Crypto',
    accountNumber: 'bc1q9zx3k0djhf82l3mds',
    amount: '$780',
    status: 'Successful',
  },
  {
    date: '2025-04-10',
    transactionNumber: 'BTC-TXN005',
    method: 'Crypto',
    accountNumber: 'bc1q5msn8tj3vka04gk6r',
    amount: '$1,495',
    status: 'Successful',
  },
  {
    date: '2025-04-14',
    transactionNumber: 'BTC-TXN006',
    method: 'Crypto',
    accountNumber: 'bc1q0avp64nm7lhq5d8yt',
    amount: '$2,210',
    status: 'Successful',
  },
  {
    date: '2025-04-18',
    transactionNumber: 'BTC-TXN007',
    method: 'Crypto',
    accountNumber: 'bc1q3kfw7rc9txz25u4hn',
    amount: '$1,775',
    status: 'Successful',
  },
  {
    date: '2025-04-21',
    transactionNumber: 'BTC-TXN008',
    method: 'Crypto',
    accountNumber: 'bc1q6jdplf8t0zsm39a8v',
    amount: '$910',
    status: 'Successful',
  },
  {
    date: '2025-04-25',
    transactionNumber: 'BTC-TXN009',
    method: 'Crypto',
    accountNumber: 'bc1q8mvn4t1s3lzxc09e7',
    amount: '$1,280',
    status: 'Successful',
  },
  {
    date: '2025-04-30',
    transactionNumber: 'BTC-TXN010',
    method: 'Crypto',
    accountNumber: 'bc1q1lsmxz7wqy6kjdf9p',
    amount: '$1,920',
    status: 'Successful',
  },
];

const TransactionTable: React.FC = () => {
  const btcSuccessTxns = transactions
    .filter((txn) => txn.method === 'Crypto' && txn.status === 'Successful')
    .slice(0, 10); // Limit to 10 if needed

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        BTC Successful Transactions
      </h2>
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
