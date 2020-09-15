import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Layout.module.css";
import AppBar from "../AppBar";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <CSSTransition
      in={true}
      appear={true}
      classNames="logo"
      timeout={500}
      unmountOnExit
    >
      <h1 className={styles.logo}>Phonebook</h1>
    </CSSTransition>
    <AppBar />
    {children}
  </div>
);

export default Layout;
