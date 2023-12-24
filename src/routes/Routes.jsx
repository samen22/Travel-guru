import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import Home from "../components/pages/Home/Home";
import News from "../components/pages/News/News";
import Destination from "../components/pages/Destination/Destination";
import Blog from "../components/pages/Blog/Blog";
import Contact from "../components/pages/Contact/Contact";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import CardDetails from "../components/pages/Home/CardDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: '/details/:_id',
                element: <CardDetails></CardDetails>,
            },
            {
                path: "/news",
                element: <News></News>
            },
            {
                path: "/destination",
                element: <Destination></Destination>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
]);

export default router;