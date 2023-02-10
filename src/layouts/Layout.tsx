import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router-dom';
import { css } from '@linaria/core';

import theme from '../styles/base';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Homepage from '../pages/Homepage';
import useFavoriteStore from '../store/favoriteStore';
import useUserStore from '../store/userStore';

const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation();
  const toggleSidebar = useUserStore((state) => state.toggleSidebar);
  const initializeFav = useFavoriteStore((state) => state.initialize);
  initializeFav();

  return (
    <div className={globals}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} />
      <main>
        <QueryClientProvider client={queryClient}>
          {location.pathname === '/' ? <Homepage /> : <Outlet />}
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
      line-height: 1.7;
      font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang TC', '儷黑 Pro',
        'LiHei Pro', 'Heiti TC', 'PingFang SC', 'Heiti SC', 文泉驛正黑,
        'WenQuanYi Zen Hei', 'Hiragino Sans GB', 微軟正黑體,
        'Microsoft JhengHei UI', 'Microsoft JhengHei', 'Microsoft YaHei',
        'Noto Sans TC', 'Lato', sans-serif;
      color: ${theme.color.darkBlue};
    }

    footer {
      position: fixed;
      bottom: 0;
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
