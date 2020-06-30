import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, AboutPage, ShopPage, PlantsPage } from "./pages";

function App() {
  return (
    <>
      <div className="app">Some Content Which is always HERE</div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/plants" exact component={PlantsPage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;
