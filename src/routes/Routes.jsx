import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import CardDetails from "../pages/home/blogs/CardDetails";
import Wishlist from "../pages/home/blogs/Wishlist";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/details',
            element: <CardDetails></CardDetails>
        },
        {
            path: '/wishlist',
            element: <Wishlist></Wishlist>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router