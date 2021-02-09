import { lazy } from "react";

export const coursesRoutes = [
  {
    path: "/preview",
    name: "List",
    exact: true,
    component: lazy(() =>
      import("../components/courses/coursesList/CoursesList")
    ),
  },
  {
    path: "/create",
    name: "Create",
    exact: true,
    component: lazy(() =>
      import("../components/courses/courseRedactor/CourseRedactor")
    ),
  },
];
