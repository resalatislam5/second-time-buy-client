import Main from "../Layout/Main";
import AllElectricBikes from "../pages/AllProducts/AllElectricBikes";
import AllLuxuryCar from "../pages/AllProducts/AllLuxuryCar";
import AllMicrobus from "../pages/AllProducts/AllMicrobus";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetails/ProductDetail";

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
                element:<ProductDetail />
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
        ]
    }
])