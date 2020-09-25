import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import withAuth from "../hoc/withAuth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    paddingLeft: 0,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {routes.map((route) => {
      if (
        (route.private && isAuthenticated) ||
        (!route.private && !route.restricted)
      ) {
        return (
          <NavLink
            exact={route.exact}
            key={route.label}
            to={route.path}
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            {route.label}
          </NavLink>
        );
      }
    })}
  </nav>
);

export default withAuth(Navigation);
