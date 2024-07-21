import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>
	},
	{
		path: "/login",
		element: <Login/>
	},
]);

export default function Routes() {
	return <RouterProvider router={router}/>
}
