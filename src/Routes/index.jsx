import React from "react";
import { Route, Switch } from "react-router-dom";
import withLayout from "../lib/withLayout";
import Pages from "../Pages";
import { MAIN_ROUTES } from "../constants";

const Routes = () => (
  <Switch>
    <Route path={MAIN_ROUTES.ROOT} component={Pages.dashboard} exact />
  </Switch>
);

export default withLayout(Routes);
