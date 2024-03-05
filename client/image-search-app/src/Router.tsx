import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { MyFavorites } from "./pages/MyFavorites";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true,

            }, 
            {
                path: '/favorites',
                element: <MyFavorites />,

            }, 
        ]

    }
])