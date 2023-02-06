import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { css } from '@linaria/core';

import theme from '../styles/base';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import useFavoriteStore from '../store/favoriteStore';
import useUserStore from '../store/userStore';

const queryClient = new QueryClient();

const Layout = () => {
  // const showSidebar = useUserStore((state) => state.showSidebar);
  const toggleSidebar = useUserStore((state) => state.toggleSidebar);
  const initializeFav = useFavoriteStore((state) => state.initialize);
  initializeFav();

  return (
    <div className={globals}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} />
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

    .no-scroll {
      overflow: hidden;
    }

    .bg-orange {
      background-color: ${theme.color.orange};
    }

    .bg-white {
      background-color: ${theme.color.white};
    }

    .darkBlue {
      color: ${theme.color.darkBlue};
    }

    .white {
      color: ${theme.color.white};
    }

    .w-80 {
      width: 80%;
    }

    .w-20 {
      width: 20%;
    }

    w-full {
      width: 100%;
    }
  }
`;

export default Layout;
