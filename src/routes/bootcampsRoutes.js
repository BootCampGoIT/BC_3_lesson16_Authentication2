import { lazy } from "react";

export const bootCampRoutes = [
  {
    path: "/preview",
    name: "List",
    exact: true,
    component: lazy(() =>
      import("../components/bootCamp/bootCampList/BootCampList")
    ),
  },
  {
    path: "/create",
    name: "Create",
    exact: true,
    component: lazy(() =>
      import("../components/bootCamp/bootCampForm/BootCampForm")
    ),
  },
];
