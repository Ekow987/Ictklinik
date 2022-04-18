import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
// const Issues =lazy(() => import("../views/ui/IssueForm"));
const Requests =lazy(() => import("../views/ui/Request"));
const Issues = lazy(() => import("../views/ui/Issues"));

const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Attach =lazy(() => import("../views/ui/Attach.file"));
const Grid = lazy(() => import("../views/ui/Grid"));

const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Login =lazy(() => import("../views/ui/Login"));
const Send =lazy(() => import("../views/ui/report.sms"));
const Details =lazy(() => import("../views/ui/request.details"));
const View =lazy(() => import("../views/ui/View.assign"));



/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout/>,
    children: [
      { path: "/" , exact:true, element: <Navigate to="/login" /> },
      { path: "/dashboard", exact: true, element: <Starter /> },
      { path: "/issues", exact: true, element: <Issues/> },
      { path: "/requests", exact:true, element: <Requests/> },
      // { path: "/reports", exact: true, element: <Report/> },


      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/attach", exact: true, element: <Attach/> },
      { path: "/badges", exact: true, element: <Badges/> },
      { path: "/grid", exact: true, element: <Grid/>},
      
      { path: "/send", exact: true, element: <Send/> },
      
     
      { path: "/details", exact: true, element: <Details/> },
      { path: "/view", exact: true, element: <View/> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs/>},
    ],
  },
  {
    path:"/login" , exact:true, element:<Login/>
  }
];

export default ThemeRoutes;
