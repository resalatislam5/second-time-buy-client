import Main from "../Layout/Main";
import AllElectricBikes from "../pages/AllProducts/AllElectricBikes";
import AllLuxuryCar from "../pages/AllProducts/AllLuxuryCar";
import AllMicrobus from "../pages/AllProducts/AllMicrobus";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetail from "../pages/ProductDetails/ProductDetail";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home />
            },
            {
                path: '/product-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
                element:<PrivateRoutes><ProductDetail /></PrivateRoutes>
            },
            {
                path: '/allbikes',
                element:<AllElectricBikes />
            },
            {
                path: '/allLuxuryCar',
                element:<AllLuxuryCar />
            },
            {
                path: '/allmicrobus',
                element:<AllMicrobus />
            },
            {
                path: '/login',
                element:<Login />
            },
            {
                path: '/signup',
                element:<SignUp />
            },
            {
                path: '/blog',
                element:<Blog />
            },
        ]
    },
    {
        path:'*',
        element: <NotFound />
    }
])