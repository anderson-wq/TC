import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import ScrollToTop from '../components/ScrollToTop';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen relative">
      <SideBar />

      <div className="flex flex-col flex-1 w-full md:ml-64 transition-all duration-300">
        <main className="flex-1 p-4 md:p-6 bg-gray-100 min-h-screen">
          <ScrollToTop />
          <Navbar2 />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
