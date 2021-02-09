import { lazy } from "react";

export const tutorsRoutes = [
  {
    path: "/preview",
    name: "List",
    exact: true,
    component: lazy(() =>
      import("../components/tutors/tutorList/TutorList")
    ),
  },
  {
    path: "/create",
    name: "Create",
    exact: true,
    component: lazy(() =>
      import("../components/tutors/tutorForm/TutorForm")
    ),
  },
];
