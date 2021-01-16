import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Album from "./Views/Albums/Album.js";
import Photos from "./Views/Photos/Photos.js";

export default function ConfigRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Album} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </Router>
  );
}
