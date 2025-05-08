import { useState } from 'react';
import bitcoin from '../assets/qrcodes/bitcoin.jpg';
import Swal from 'sweetalert2';
import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../src/auth/firebase'; // Adjust this path to your project

const walletDetails = {
  bitcoin: {
    address: 'bc1qv96mwt0ue6pd63qg5ssx23qusepthq4tepvvga',
    qrCode: bitcoin,
  },
};

const CryptoTransfer = () => {
  const [selectedWallet, setSelectedWallet] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    receiver: '',
    confirmReceiver: '',
    amount: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleWalletChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedWallet(value);
    const wallet = walletDetails[value as keyof typeof walletDetails];
    setWalletAddress(wallet?.address || '');
    setQrCode(wallet?.qrCode || '');
    setCopied(false);
  };

  const handleClick = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    console.log('USER:', user); // Add this
    console.log('FORM DATA AMOUNT:', formData.amount); // Add this
  
    if (!user) {
      alert('User not authenticated.');
      return;
    }
  
    if (!formData.amount) {
      alert('Please enter an amount first.');
      return;
    }
  
    try {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
  
      const existingAmount = userSnap.exists()
        ? userSnap.data().investmentAmount || 0
        : 0;
  
      const updatedAmount = Number(existingAmount) + Number(formData.amount);
      console.log('UPDATED AMOUNT:', updatedAmount); // Add this
  
      await setDoc(
        userRef,
        {
          investmentAmount: updatedAmount,
          email: user.email,
        },
        { merge: true }
      );
  
      Swal.fire({
        title: 'Thanks!',
        text: 'We’ve received your investment request. It’s being processed.',
        icon: 'success',
        confirmButtonColor: '#facc15',
        confirmButtonText: 'OK',
      });
  
      setFormData({ ...formData, amount: '' });
  
    } catch (error) {
      console.error('Error updating investment:', error); // Log the actual error
      alert('Failed to update your investment. Please try again.');
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const copyToClipboard = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.receiver ||
      !formData.confirmReceiver ||
      !formData.amount ||
      !selectedWallet
    ) {
      Swal.fire('Warning', 'Please fill in all fields.', 'warning');
      return;
    }

    if (formData.receiver !== formData.confirmReceiver) {
      Swal.fire('Mismatch', 'Receiver information does not match.', 'error');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      Swal.fire('Success', 'Crypto transfer initiated!', 'success');
      setIsSending(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Transfer with Crypto</h1>
        <p className="text-gray-500 mt-2">Send crypto securely to another wallet or email.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="mt-2 border border-gray-300 rounded-md p-3 w-full"
            />
          </div>

          <div>
            <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">
              Select Coin
            </label>
            <select
              id="wallet"
              value={selectedWallet}
              onChange={handleWalletChange}
              className="mt-2 border border-gray-300 rounded-md p-3 w-full"
            >
              <option value="">-- Choose Wallet --</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          </div>
        </div>

        {walletAddress && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Send {selectedWallet.toUpperCase()} to this address
            </label>

            <div className="mt-2 flex flex-col md:flex-row md:items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-md font-mono text-sm text-gray-800 border border-gray-300 w-full break-all">
                {walletAddress}
              </div>
              <button
                type="button"
                onClick={copyToClipboard}
                className="px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 text-sm"
              >
                {copied ? 'Copied!' : 'Copy Address'}
              </button>
            </div>

            <div className="mt-4 flex flex-col md:items-start items-center">
              <img
                src={qrCode}
                onError={(e) => (e.currentTarget.src = '/qrcodes/fallback.png')}
                alt={`${selectedWallet} QR Code`}
                className="w-32 h-32 object-contain border border-gray-200 rounded-md"
              />
              <p className="text-sm text-gray-500 mt-2">
                Scan this code using your wallet app to make the transfer.
              </p>

              <button
                type="button"
                onClick={handleClick}
                className={`mt-4 px-4 py-2 ${
                  isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-400'
                } text-white rounded w-full`}
                disabled={isSending}
              >
                {isSending ? 'Processing...' : 'I’ve Sent the Funds'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CryptoTransfer;
