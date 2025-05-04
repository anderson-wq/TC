import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PlanPage from '../pages/PlanPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

// Dashboard Pages
import DashboardHome from '../pages/dashboard/DashboardHome';
import Investments from '../pages/dashboard/Investments';
import Settings from '../pages/dashboard/Settings';
import TransferMoney from '../pages/dashboard/TransferMoney';
import RequestMoney from '../pages/dashboard/RequestMoney';
import Transaction from '../pages/dashboard/Transaction';
import Fund from '../components/Fund';
import CryptoTransfer from '../components/CryptoTransfer';
import SettingsPage from '../pages/dashboard/SettingsPage';
import ProtectedRoute from './protectedRoute';

const router = createBrowserRouter([
  // Public Routes (Root Layout)
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'plan', element: <PlanPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
    ],
  },

  // Protected Dashboard Routes
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>  {/* Apply ProtectedRoute for all dashboard routes */}
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: 'investments', element: <Investments /> },
      { path: 'settings', element: <Settings /> },
      { path: 'investment', element: <Investments /> },
      { path: 'transfer', element: <TransferMoney /> },
      { path: 'recieve', element: <RequestMoney /> },
      { path: 'transaction', element: <Transaction /> },
      { path: 'transfer/fund', element: <Fund /> },
      { path: 'transfer/crypto', element: <CryptoTransfer /> },
      
      // Protected Route with specific role (Superadmin)
      {
        path: 'setting',
        element: (
          <ProtectedRoute requiredRole="superadmin">
            <SettingsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
