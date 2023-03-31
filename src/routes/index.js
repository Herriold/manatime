import React, { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Loadable = (Component) => (props) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      children: [
        {
          element: <DashboardPage />,
          path: "",
          index: true,
        },
        {
          element: <Presence />,
          path: "presence",
        },
        {
          element: <Absence />,
          path: "absence",
          children: [
            {
              element: <Absence />,
              path: "solde",
            },
          ],
        },
        {
          element: <Planning />,
          path: "planning",
        },
        { element: <NotFound />, path: "404" },
      ],
      path: "/",
      element: <DashboardLayout />,
    },
    { path: "*", element: <Navigate to="/absence" replace /> },
  ]);
}

const DashboardPage = Loadable(
  lazy(() => import("../pages/dashboard/DashboardPage"))
);
const DashboardLayout = Loadable(
  lazy(() => import("../layouts/dashboard/index"))
);
const Presence = Loadable(lazy(() => import("../pages/dashboard/Presence")));
const Absence = Loadable(lazy(() => import("../pages/dashboard/Absence")));
const Planning = Loadable(lazy(() => import("../pages/dashboard/Planning")));
const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));
