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
import AllBlogs from "../pages/allBlogs/AllBlogs";
import AddBlog from "../pages/addBlog/AddBlog";
import UpdateBlog from "../pages/updateBlog/UpdateBlog";

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
                loader: ({ params }) => fetch(`https://blog-website-server-beta.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/guidesDetails/:id',
                element: <PrivetRoutes> <TravelGuidesDetails></TravelGuidesDetails> </PrivetRoutes>,
                loader: ({ params }) => fetch(`https://blog-website-server-beta.vercel.app/guides/${params.id}`)
            },
            {
                path: '/wishlist',
                element: <PrivetRoutes><Wishlist></Wishlist></PrivetRoutes>,
                loader: () => fetch('https://blog-website-server-beta.vercel.app/addBlog')
            },
            {
                path: '/all_blogs',
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch('https://blog-website-server-beta.vercel.app/addBlog')
            },
            {
                path: '/update/:id',
                element: <PrivetRoutes> <UpdateBlog></UpdateBlog> </PrivetRoutes>,
                loader: ({ params }) => fetch(`https://blog-website-server-beta.vercel.app/addBlog/${params.id}`)
            },

            {
                path: '/add_blog',
                element: <AddBlog></AddBlog>

            },

            {
                path: '/login',
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