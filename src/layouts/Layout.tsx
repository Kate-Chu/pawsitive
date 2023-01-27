import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { css } from '@linaria/core';
import theme from 'src/styles/base';
import Header from './Header';
import Footer from './Footer';
// import Sidebar from './Sidebar';

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className={globals}>
      <Header />
      {/* <Sidebar /> */}
      <main>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
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
