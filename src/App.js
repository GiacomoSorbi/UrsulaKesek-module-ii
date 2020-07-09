import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  CabinetPage,
  Floral,
  Fresh,
  HomePage,
  Oriental,
  PlantsPage,
  ShopPage,
  Woody,
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
        <Route path="/cabinet" exact component={CabinetPage} />
        <Route
          path="*"
          render={() => (
            <img
              alt="404"
              src="https://i.pinimg.com/originals/f3/1b/5b/f31b5bcda076125bf7010c781a4578a0.gif"
            />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
