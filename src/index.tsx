import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Animals from './pages/Animals';
import LandingPage from './pages/Homepage';
import Layout from './layouts/Layout';
import LoadingPage from './pages/LoadingPage';

const About = React.lazy(() => import('./pages/AboutUs'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const Favorites = React.lazy(() => import('./pages/Favorites'));
const Tutorial = React.lazy(() => import('./pages/Tutorial'));

window.React = React;

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <LandingPage /> },
      { path: 'animals', element: <Animals /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'about-us', element: <About /> },
      { path: 'tutorial', element: <Tutorial /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
