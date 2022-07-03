import Login from "../views/ui/Login/Login"
import Devices from "../views/ui/Devices/Devices"
import Trainings from "../views/ui/Trainings/Trainings"
import Reports from "../views/ui/Reports"
import Issues from "../views/ui/Issues/Issues"
import { Navigate } from "react-router-dom"

/****Layouts*****/
import FullLayout from "../layouts/FullLayout.js"

/*****Routes******/

const ThemeRoutes = [
	{
		path: "/",
		element: <FullLayout />,
		children: [
			{
				path: "/issues",
				exact: true,
				element: <Issues />
			},
			{
				path: "/devices",
				exact: true,
				element: <Devices />
			},
			{
				path: "/training",
				exact: true,
				element: <Trainings />
			},

			{ path: "/reports", exact: true, element: <Reports /> }
		]
	},
	{
		path: "/login",
		exact: true,
		element: <Login />
	}
]

export default ThemeRoutes
