import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllAdvertisedItems from "../pages/AllProducts/AllAdvertisedItems";
import AllElectricBikes from "../pages/AllProducts/AllElectricBikes";
import AllLuxuryCar from "../pages/AllProducts/AllLuxuryCar";
import AllMicrobus from "../pages/AllProducts/AllMicrobus";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashboard/AddProduct";
import AllUser from "../pages/Dashboard/AllUser";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyOrders from "../pages/Dashboard/MyOrders";
import MyProducts from "../pages/Dashboard/MyProducts";
import ReportedItems from "../pages/Dashboard/ReportedItems";
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
                path: '/alladvertise',
                element:<AllAdvertisedItems />
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
        path:'/dashboard',
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        children:[
            {
                path:'/dashboard/orders',
                element: <PrivateRoutes><MyOrders /></PrivateRoutes>
            },
            {
                path:'/dashboard/addProduct',
                element: <PrivateRoutes><AddProduct /></PrivateRoutes>
            },
            {
                path:'/dashboard/alluser',
                element: <PrivateRoutes><AllUser /></PrivateRoutes>
            },
            {
                path:'/dashboard/myproducts',
                element: <PrivateRoutes><MyProducts /></PrivateRoutes>
            },
            {
                path:'/dashboard/report',
                element: <PrivateRoutes><ReportedItems /></PrivateRoutes>
            }
        ]
    },
    {
        path:'*',
        element: <NotFound />
    }
])