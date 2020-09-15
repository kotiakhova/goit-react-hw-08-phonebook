import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "../routes";
import Layout from "./Layout";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
