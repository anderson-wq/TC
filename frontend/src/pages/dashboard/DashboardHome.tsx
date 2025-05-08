import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../auth/firebase';
import {
  AiOutlineDollarCircle,
  AiOutlineWallet,
  AiOutlinePieChart,
} from 'react-icons/ai';
import { FaMoneyBillWave, FaReceipt } from 'react-icons/fa';
import { MdOutlineCompareArrows } from 'react-icons/md';

const DashboardHome = () => {
  interface UserData {
    investmentAmount: number;
    interestBalance: number;
    totalInvest: number;
    totalPayout: number;
    totalTransaction: number;
  }

  const [userData, setUserData] = useState<UserData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.log('User not logged in.');
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData({
            investmentAmount: data?.investmentAmount ?? 0,
            interestBalance: data?.interestBalance ?? 0,
            totalInvest: data?.totalInvest ?? 0,
            totalPayout: data?.totalPayout ?? 0,
            totalTransaction: data?.totalTransaction ?? 0,
          });
        } else {
          setUserData({
            investmentAmount: 0,
            interestBalance: 0,
            totalInvest: 0,
            totalPayout: 0,
            totalTransaction: 0,
          });
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const dashboardStats = [
    {
      id: 1,
      title: 'Main Balance',
      value: userData?.investmentAmount || 0,
      icon: <AiOutlineDollarCircle size={28} />,
    },
    {
      id: 2,
      title: 'Interest Balance',
      value: userData?.interestBalance || 0,
      icon: <AiOutlineWallet size={28} />,
    },
    {
      id: 3,
      title: 'Total Balance',
      value:
        (userData?.investmentAmount || 0) + (userData?.interestBalance || 0),
      icon: <AiOutlinePieChart size={28} />,
    },
    {
      id: 4,
      title: 'Total Invest',
      value:
        (userData?.investmentAmount || 0) + (userData?.interestBalance || 0),
      icon: <FaMoneyBillWave size={28} />,
    },
    {
      id: 5,
      title: 'Total Payout',
      value: userData?.totalPayout || 0,
      icon: <FaReceipt size={28} />,
    },
    {
      id: 6,
      title: 'Total Transaction',
      value:
        (userData?.investmentAmount || 0) + (userData?.interestBalance || 0),
      icon: <MdOutlineCompareArrows size={28} />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {loading ? (
        <p className="text-gray-600">Loading user data...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {dashboardStats.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md p-5 rounded-lg flex items-center justify-between"
            >
              <div className="text-blue-600">{item.icon}</div>
              <div className="text-right">
                <p className="text-sm text-gray-500 font-medium">
                  {item.title}
                </p>
                <p className="text-lg font-bold text-gray-800">
                  $
                  {item.value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
