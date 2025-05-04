import React from 'react';

type Transaction = {
  No: string;
  Type: string;
  Txnid: string;
  Amount: number;
  Date: string;
};

const transactions: Transaction[] = [
  {
    No: '1',
    Type: 'Invest',
    Txnid: 'TXN98765432',
    Amount: 20.0,
    Date: '20 Mar 2025',
  },
  {
    No: '2',
    Type: 'Invest',
    Txnid: 'TXN98765433',
    Amount: 30.5,
    Date: '21 Mar 2025',
  },
  {
    No: '3',
    Type: 'Withdraw',
    Txnid: 'TXN98765434',
    Amount: 15.75,
    Date: '22 Mar 2025',
  },
  {
    No: '4',
    Type: 'Invest',
    Txnid: 'TXN98765435',
    Amount: 50.0,
    Date: '23 Mar 2025',
  },
];

const DashboardTable: React.FC = () => {
  return (
    <div className="p-6 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase">
            <th className="py-3 px-4 border-b">No</th>
            <th className="py-3 px-4 border-b">Type</th>
            <th className="py-3 px-4 border-b">Txnid</th>
            <th className="py-3 px-4 border-b">Amount</th>
            <th className="py-3 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr
              key={index}
              className="text-sm text-gray-800 hover:bg-gray-50 transition"
            >
              <td className="py-3 px-4 border-b">{txn.No}</td>
              <td className="py-3 px-4 border-b">{txn.Type}</td>
              <td className="py-3 px-4 border-b">{txn.Txnid}</td>
              <td className="py-3 px-4 border-b">
                ${txn.Amount.toFixed(2)}
              </td>
              <td className="py-3 px-4 border-b">{txn.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
