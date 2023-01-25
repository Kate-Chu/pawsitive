import { Outlet } from 'react-router-dom';
import { css } from '@linaria/core';
import theme from 'src/styles/base';
import Header from './Header';
import Footer from './Footer';
// import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className={globals}>
      <Header />
      {/* <Sidebar /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const globals = css`
  :global() {
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    body {
      height: 100vh;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      line-height: 1.7;
      color: ${theme.color.darkBlue};
    }
  }
`;

export default Layout;
