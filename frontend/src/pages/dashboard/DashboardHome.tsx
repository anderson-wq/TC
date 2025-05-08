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
import { updateDoc } from 'firebase/firestore';

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
  const [isAdmin, setIsAdmin] = useState(false);

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
  useEffect(() => {
    const fetchUserRole = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        setIsAdmin(data.isAdmin === true);
      }
    };

    fetchUserRole();
  }, []);

  const [targetUserId, setTargetUserId] = useState('');
  const [adminInterestUpdateStatus, setAdminInterestUpdateStatus] =
    useState('');

  const handleAdminAddInterest = async () => {
    try {
      const userRef = doc(db, 'users', targetUserId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        setAdminInterestUpdateStatus('User not found.');
        return;
      }

      const user = userSnap.data();
      const newInterest =
        (user.interestBalance || 0) + (user.investmentAmount || 0) * 0.2;

      await updateDoc(userRef, {
        interestBalance: newInterest,
      });

      setAdminInterestUpdateStatus(
        `Successfully updated interest for ${targetUserId}.`,
      );
    } catch (error) {
      console.error('Admin interest update error:', error);
      setAdminInterestUpdateStatus('Failed to update interest.');
    }
  };

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
          <div>
            <div>
              {isAdmin && (
                <div className="mt-12 bg-gray-50 p-4 rounded shadow">
                  <h2 className="text-lg font-semibold mb-2">
                    Admin: Update Interest for a User
                  </h2>
                  <input
                    type="text"
                    placeholder="Enter User UID"
                    className="border px-2 py-1 rounded mr-2"
                    value={targetUserId}
                    onChange={(e) => setTargetUserId(e.target.value)}
                  />
                  <button
                    onClick={handleAdminAddInterest}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Add 20% Interest
                  </button>
                  {adminInterestUpdateStatus && (
                    <p className="mt-2 text-sm text-gray-600">
                      {adminInterestUpdateStatus}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
