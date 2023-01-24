import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
