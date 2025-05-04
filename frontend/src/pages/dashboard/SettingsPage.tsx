import { useState } from 'react';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    username: 'john_doe',
    email: 'john.doe@example.com',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData({ ...formData, [id]: checked });
  };

  const handleSubmitProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handleSubmitPasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New password and confirmation do not match!');
      return;
    }
    alert('Password updated successfully!');
  };

  const handleSubmitNotifications = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Notification settings updated!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your profile, password, and notification preferences.</p>
      </div>

      {/* Profile Settings */}
      <form onSubmit={handleSubmitProfile} className="bg-white shadow-md rounded-xl p-6 space-y-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Profile Settings</h2>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-400"
        >
          Update Profile
        </button>
      </form>

      {/* Change Password */}
      <form onSubmit={handleSubmitPasswordChange} className="bg-white shadow-md rounded-xl p-6 space-y-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>

        <div>
          <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
            Old Password
          </label>
          <input
            id="oldPassword"
            type="password"
            value={formData.oldPassword}
            onChange={handleInputChange}
            className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleInputChange}
            className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="mt-2 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-400"
        >
          Change Password
        </button>
      </form>

      {/* Notification Settings */}
      <form onSubmit={handleSubmitNotifications} className="bg-white shadow-md rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Notification Settings</h2>

        <div className="flex items-center">
          <input
            id="notifications"
            type="checkbox"
            checked={formData.notifications}
            onChange={handleCheckboxChange}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="notifications" className="ml-2 text-sm text-gray-700">
            Enable Notifications
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-400"
        >
          Update Notifications
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
