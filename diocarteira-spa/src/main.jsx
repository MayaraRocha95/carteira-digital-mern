import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';

const router = createBrowserRouter([
  {
    path: "/signin",
    element:<Signin />,
  },
  {
    path: "/signup",
    element:<Signup />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
