import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Test from "./demos/Test";

const DemoRouter = () => {
  return (
    <Fragment>
      <Switch>
        <Route component={Test} path="/demo/testing" />
      </Switch>
    </Fragment>
  );
};

export default DemoRouter;
