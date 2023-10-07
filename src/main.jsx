import React  from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayOut/MainLayout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import Upcoming from './Components/Upcoming';
import ServiceDetails from './ServiceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
   
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
     
      {
        path:'/upcomming',
        element:<Upcoming></Upcoming>
      },
      {
        path:'/service/:id',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:()=>fetch('/info.json')

      },
   
    ],
  },
];

const router = createBrowserRouter(
  routes,
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);
