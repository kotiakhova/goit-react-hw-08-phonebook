/*
 * TODO: Подписаться на name и avatar https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg
 * TODO: диспатч операцию logout
 */
import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    marginLeft: 4,
    backgroundColor: "darkslategrey",
    color: "white",
    padding: "4px 10px",
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "500",
    fontSize: "13px",
    border: "none",
    borderRadius: 2,
  },
};

const UserMenu = ({ name, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {name}!</span>
    <button type="button" onClick={onLogout} style={styles.button}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
