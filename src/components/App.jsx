import React, { Suspense, Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./RoutesType/PrivateRoute";
import PublicRoute from "./RoutesType/PublicRoute";
import routes from "../routes";
import Layout from "./Layout";
import "./App.css";
import { authOperations } from "../redux/auth";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map((route) =>
                // <Route key={route.path} {...route} />
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                )
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
