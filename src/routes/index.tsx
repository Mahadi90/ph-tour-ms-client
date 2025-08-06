import App from "@/App";
import About from "@/pages/About";
import LoginPage from "@/pages/Login";
import Registration from "@/pages/Registration";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path : "/",
        Component: App,
        children : [
            {
                path : '/about',
                Component : About
            }
        ]
    },
    {
        path : '/login',
        Component : LoginPage
    },
    {
        path : '/registration',
        Component : Registration
    },
])