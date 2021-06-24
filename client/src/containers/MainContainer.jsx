import React from "react";
import { Switch, Route } from "react-router-dom";

export default function MainContainer() {
  return (
    <div>
      <Switch>
        <Route path="/properties">
          <h2>PROPERTIES</h2>
        </Route>
        <Route path="/tenants">
          <h2>TENANTS</h2>
        </Route>
      </Switch>
    </div>
  );
}
