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
import ServiceDetails from './ServiceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

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
        path:'/service/:id',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:()=>fetch('/info.json')

      },{
        path:'/about',
        element:<About></About>
      }
   ,{
    path:'/blog',
    element:<Blog></Blog>
   },
   {
    path:'contact',
    element:<Contact></Contact>
   }
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
