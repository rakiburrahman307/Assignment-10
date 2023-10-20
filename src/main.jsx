import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ErrorPage404 from './components/pages/ErrorPage404';
import Login from './components/pages/Login';
import AuthProvider from './components/AuthProvidar/AuthProvider';
import Registration from './components/pages/Registration';
import PrivateRoutes from './components/PrivateRoute/PrivateRoutes';
import AddProduct from './components/pages/AddProduct';
import MyCart from './components/pages/MyCart';
import BrandCars from './components/pages/BrandCars';
import Details from './components/pages/Details';
import Update from './components/pages/Update';
import Feedback from './components/pages/Feedback';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/add_product',
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: "/my_cart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader: () => fetch('https://assignment-10-server-3ce1gju8r-rakiburrahman307.vercel.app/myCart')
      },
      {
        path: '/brandCars/:brandName',
        element: <PrivateRoutes><BrandCars></BrandCars></PrivateRoutes>,
        loader: () => fetch(`https://assignment-10-server-3ce1gju8r-rakiburrahman307.vercel.app/allProducts`)

      },
      {
        path: '/details/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://assignment-10-server-3ce1gju8r-rakiburrahman307.vercel.app/allProducts/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://assignment-10-server-3ce1gju8r-rakiburrahman307.vercel.app/allProducts/${params.id}`)
      },
      {
        path: '/feedback',
        element: <PrivateRoutes><Feedback></Feedback></PrivateRoutes>,
        loader: () => fetch('https://assignment-10-server-3ce1gju8r-rakiburrahman307.vercel.app/feedback')
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
