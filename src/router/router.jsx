import {
    createBrowserRouter
} from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/HomePage/HomePage";
import Products from "../components/Products/Products";
import PrivateRoutes from "./PrivateRoutes";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <PrivateRoutes> <HomePage /></PrivateRoutes>
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
        ]
    },

]);