import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Blog from "../Blog/Blog";
import BookingModal from "../BookingModal/BookingModal";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login/Login";
import SignUp from "../Login/Login/SignUp/SignUp";
import PageNotFound from "../PageNotFound/PageNotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Products from "../Products/Products";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/product/:brand',
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            // {
            //     path: '/bookingOrders/:brand/:id',
            //     element: <BookingModal></BookingModal>,
            //     loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            // },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
      }
])

export default router;