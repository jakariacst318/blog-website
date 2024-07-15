import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import CardDetails from "../pages/home/blogs/CardDetails";
import Wishlist from "../pages/home/blogs/Wishlist";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivetRoutes from "../privetRoutes/PrivetRoutes";
import ErrorPage from "../errorPage/ErrorPage";
import TravelGuidesDetails from "../pages/travelGuides/TravelGuidesDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/details/:id',
            element: <PrivetRoutes><CardDetails></CardDetails></PrivetRoutes>,
            loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
        {
            path: '/guidesDetails/:id',
            element: <PrivetRoutes> <TravelGuidesDetails></TravelGuidesDetails> </PrivetRoutes>,
            loader: ({ params }) => fetch(`http://localhost:5000/guides/${params.id}`)
        },
        {
            path: '/wishlist',
            element: <PrivetRoutes><Wishlist></Wishlist></PrivetRoutes>
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