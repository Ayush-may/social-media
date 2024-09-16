import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Feed from "./pages/feed/Feed.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>
	},
	{
		path: "/login",
		element: <Login/>
	},
	{
		path:"/feed",
		element: <Feed/>
	}
]);

export default function Routes() {
	return <RouterProvider router={router}/>
}
