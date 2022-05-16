import { lazy } from "react"
import { Navigate } from "react-router-dom"

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"))

/***** Pages ****/

// const Issues =lazy(() => import("../views/ui/IssueForm"));
const Issues = lazy(() => import("../views/ui/Issues"))

const Login = lazy(() => import("../views/ui/Login"))
const RequestDevices = lazy(() => import("../views/ui/RequestDevices"))
const RequestTraining = lazy(() => import("../views/ui/RequestTraining"))

/*****Routes******/

const ThemeRoutes = [
	{
		path: "/",
		element: <FullLayout />,
		children: [
			{ path: "/", exact: true, element: <Navigate to="/login" /> },
			{ path: "/issues", exact: true, element: <Issues /> },
			{ path: "/request-devices", exact: true, element: <RequestDevices/> },
			{ path: "/request-training", exact: true, element: <RequestTraining/> }



			// { path: "/reports", exact: true, element: <Report/> },
		]
	},
	{
		path: "/login",
		exact: true,
		element: <Login />
	}
]

export default ThemeRoutes
