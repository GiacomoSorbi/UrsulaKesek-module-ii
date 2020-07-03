import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  AboutPage,
  Floral,
  Fresh,
  HomePage,
  Oriental,
  PlantsPage,
  ShopPage,
  Woody
} from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route path="/fresh" exact component={Fresh} />
        <Route path="/floral" exact component={Floral} />
        <Route path="/oriental" exact component={Oriental} />
        <Route path="/woody" exact component={Woody} />
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/plants" exact component={PlantsPage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;
