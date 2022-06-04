import { lazy } from "react"
import { Navigate } from "react-router-dom"

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"))

/***** Pages ****/
const Issues = lazy(() => import("../views/ui/Issues"))
const Login = lazy(() => import("../views/ui/Login"))
const Devices = lazy(() => import("../views/ui/Devices"))
const Training = lazy(() => import("../views/ui/Trainings"))
const Report = lazy(() => import("../views/ui/Report"))

/*****Routes******/

const ThemeRoutes = [
	{
		path: "/",
		element: <FullLayout />,
		children: [
			{ path: "/", exact: true, element: <Navigate to="/login" /> },
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
				element: <Training />
			},
			{
				path: "/request-training",
				exact: true,
				element: <Training />
			},
			{
				path: "/request-training",
				exact: true,
				element: <Training />
			},

			{ path: "/reports", exact: true, element: <Report/> },
		]
	},
	{
		path: "/login",
		exact: true,
		element: <Login />
	}
]

export default ThemeRoutes
