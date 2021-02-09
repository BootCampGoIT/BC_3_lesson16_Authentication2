import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
    isPrivate: false,
    restricted: false,
  },
  {
    path: "/test",
    name: "Test",
    exact: false,
    component: lazy(() => import("../pages/Test")),
    isPrivate: false,
    restricted: false,
  },

  {
    path: "/bootcamps",
    name: "BootCamps",
    exact: false,
    component: lazy(() => import("../pages/BootCampsPage")),
    isPrivate: true,
    restricted: false,
  },

  {
    path: "/courses",
    name: "Courses",
    exact: false,
    component: lazy(() => import("../pages/CoursePage")),
    isPrivate: true,
    restricted: false,
  },
  {
    path: "/students",
    name: "Students",
    exact: false,
    component: lazy(() => import("../pages/StudentsPage")),
    isPrivate: true,
    restricted: false,
  },
  {
    path: "/tutors",
    name: "Tutors",
    exact: false,
    component: lazy(() => import("../pages/TutorPage")),
    isPrivate: true,
    restricted: false,
  },

  {
    path: "/signup",
    name: "SignUp",
    exact: false,
    component: lazy(() => import("../components/auth/AuthForm")),
    isPrivate: false,
    restricted: true,
  },
  {
    path: "/signin",
    name: "SignIn",
    exact: false,
    component: lazy(() => import("../components/auth/AuthForm")),
    isPrivate: false,
    restricted: true,
  },
];
