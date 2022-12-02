import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Blog from "../Blog/Blog";
import DashBoard from "../DashBoard/DashBoard";
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
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
      }
])

export default router;