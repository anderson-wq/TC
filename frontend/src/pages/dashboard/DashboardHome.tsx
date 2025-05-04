import { ReactNode } from 'react';

import PageHeader from '../../ui/PageHeader';
import {
  AiOutlineDollarCircle,
  AiOutlineWallet,
  AiOutlinePieChart,
} from 'react-icons/ai';
import { FaMoneyBillWave, FaReceipt, FaTicketAlt } from 'react-icons/fa';
import { MdOutlineCompareArrows } from 'react-icons/md';

interface DashContent {
  id: number;
  title: string;
  price: number;
  icon: ReactNode;
}

const dashContent: DashContent[] = [
  {
    id: 1,
    icon: <AiOutlineDollarCircle size={32} />,
    title: 'Main Balance',
    price: 0.0,
  },
  {
    id: 2,
    icon: <AiOutlineWallet size={32} />,
    title: 'Interest Balance',
    price: 0.0,
  },
  {
    id: 3,
    icon: <AiOutlinePieChart size={32} />,
    title: 'Total Balance',
    price: 0.0,
  },
  {
    id: 4,
    icon: <FaMoneyBillWave size={32} />,
    title: 'Total Invest',
    price: 0.0,
  },
  { id: 5, icon: <FaReceipt size={32} />, title: 'Total Payout', price: 0.0 },
  {
    id: 6,
    icon: <MdOutlineCompareArrows size={32} />,
    title: 'Total Transaction',
    price: 0.0,
  },
  { id: 7, icon: <FaTicketAlt size={32} />, title: 'Total Ticket', price: 0 },
];

const DashboardHome = () => {
  return (
    <div className='h-screen'>
      <PageHeader title="Dashboard" subtitle="Dashboard" />
      {/* list of cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 ">
        {dashContent.map((item) => (
          <div key={item.id}>
            <div className="flex flex-row justify-around items-center p-4 rounded-lg shadow-md">
              <div className="text-blue-600">{item.icon}</div>
              <div>
                <div className="font-bold">{item.title}</div>
                <div className="font-semibold">${item.price.toFixed(2)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
