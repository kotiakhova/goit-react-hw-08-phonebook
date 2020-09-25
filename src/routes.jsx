import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("./views/HomePage" /* webpackChunkName: "home-page" */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() =>
      import("./views/RegisterPage" /* webpackChunkName: "register-page" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() =>
      import("./views/LoginPage" /* webpackChunkName: "login-page" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() =>
      import("./views/ContactsPage" /* webpackChunkName: "contacts-page" */)
    ),
    private: true,
    restricted: false,
  },
];
