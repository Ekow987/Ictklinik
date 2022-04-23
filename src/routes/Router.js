import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

// const Issues =lazy(() => import("../views/ui/IssueForm"));
const Issues = lazy(() => import("../views/ui/Issues"));

const Login =lazy(() => import("../views/ui/Login"));








/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout/>,
    children: [
      { path: "/" , exact:true, element: <Navigate to="/login" /> },
      { path: "/issues", exact: true, element: <Issues/> },
     
      // { path: "/reports", exact: true, element: <Report/> },

    ],
  },
  {
    path:"/login" , exact:true, element:<Login/>
  }
];

export default ThemeRoutes;
