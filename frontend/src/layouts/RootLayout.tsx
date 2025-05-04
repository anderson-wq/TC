import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
