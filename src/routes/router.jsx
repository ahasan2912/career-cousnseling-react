import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../components/Services";
import PrivetRoute from "./PrivetRoute";
import ErrorPages from "../pages/ErrorPages";
import Profile from "../pages/Profile";
import Resources from "../pages/Resources";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/services.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/services/:id",
                element: <PrivetRoute><Services></Services></PrivetRoute>,
                loader: async({params}) => {
                    const res = await fetch("/services.json");
                    const data = await res.json();
                    const singleData = data.find(service => service.id === parseInt(params.id));
                    return singleData;
                }
            },
            {
                path: "/profile",
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            },
            {
                path: "/resources",
                element: <PrivetRoute><Resources></Resources></PrivetRoute>
            },
        ]
    }
], {
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
    }
})

export default router;