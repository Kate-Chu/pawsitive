import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import Animals from './pages/Animals';
import LandingPage from './pages/LandingPage';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tutorial from './pages/Tutorial';

window.React = React;

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'landing-page', element: <LandingPage /> },
      { path: 'animals', element: <Animals /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'login', element: <Login /> },
      { path: 'about', element: <About /> },
      { path: 'tutorial', element: <Tutorial /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
