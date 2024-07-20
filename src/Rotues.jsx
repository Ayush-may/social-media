import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
]);

export default function Routes() {
    return <RouterProvider router={router}/>
}
