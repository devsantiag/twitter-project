import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

// manual imports and necessary for application
import './index.css';
import { PageNotFound } from './components/PageNotFound.jsx';
import UserProfile from './routs/UserProfile.jsx';
import NavBar from './components/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound/>,
    children: [
      {
        path: 'navbar',
        element: <NavBar/>
      },
    ],
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
