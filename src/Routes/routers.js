import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home />
            }
        ]
    }
])