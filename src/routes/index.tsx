import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import LoginPage from "@/pages/Login";
import Registration from "@/pages/Registration";
import Bookings from "@/pages/user/Bookings";
import Verify from "@/pages/Verify";
import { geneRateRoutes } from "@/utils/generateRoute";
import { createBrowserRouter } from "react-router";
import { adminSideBarItems } from "./adminSideBarItems";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: '/about',
                Component: About
            }
        ]
    },
    {
        path: '/admin',
        Component: DashboardLayout,
        children : [...geneRateRoutes(adminSideBarItems)]
    },
    {
        path: '/user',
        Component: DashboardLayout,
        children : [
            {
                path : '/user/bookings',
                Component : Bookings
            }
        ]
    },
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/registration',
        Component: Registration
    },
    {
        path: '/verify',
        Component: Verify
    },
])