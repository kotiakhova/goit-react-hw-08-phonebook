import React from "react";
import { Route, Redirect } from "react-router-dom";
import withAuth from "../hoc/withAuth";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default withAuth(PrivateRoute);
