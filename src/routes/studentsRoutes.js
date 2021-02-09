import { lazy } from "react";

export const studentsRoutes = [
  {
    path: "/preview",
    name: "List",
    exact: true,
    component: lazy(() =>
      import("../components/students/studentsList/StudentsList")
    ),
  },
  {
    path: "/create",
    name: "Create",
    exact: true,
    component: lazy(() =>
      import("../components/students/studentForm/StudentForm")
    ),
  },
];
