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




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:'/add_product',
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path:"/my_cart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
      },
      {
        path:'/brandCars/:brandName',
        element: <PrivateRoutes><BrandCars></BrandCars></PrivateRoutes>,
        loader: ()=> fetch(`http://localhost:5000/allProducts`)
        
      },
      {
        path:'/details/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/allProducts/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
