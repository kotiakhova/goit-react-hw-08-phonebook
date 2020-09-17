import React from "react";

import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNavigation from "../AuthNavigation";

import styles from "./AppBar.module.css";
import withAuth from "../hoc/withAuth";

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
  </header>
);

export default withAuth(AppBar);
