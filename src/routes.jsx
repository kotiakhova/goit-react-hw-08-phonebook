import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/HomePage")),
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/RegisterPage")),
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/LoginPage")),
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./views/ContactsPage")),
  },
];
