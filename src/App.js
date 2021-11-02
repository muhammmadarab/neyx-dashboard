import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aside from "./Components/Aside/Aside";
import "./Content.css";
import Analytics from "./Components/Analytics/Analytics";
import Inventory from "./Components/Inventory/Inventory";
import ScrolltoTop from "./ScrolltoTop";

const App = () => {
  return (
    <>
      <Router>
        <Aside />
        <ScrolltoTop />
        <div className="content">
          <Switch>
            <Route path="/inventory">
              <Inventory />;
            </Route>
            <Route path="/analytics">
              <Analytics />
            </Route>
            <Route exact path="/">
              <Analytics />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
