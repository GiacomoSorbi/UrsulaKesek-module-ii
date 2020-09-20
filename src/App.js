import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  CabinetPage,
  ContactPage,
  Floral,
  Fresh,
  HomePage,
  Oriental,
  PlantsPage,
  Woody,
} from "./pages";
import Lost from "./components/Lost";
import StoreContent from "./store";
import PlantDisplay from "./pages/PlantsPage/PlantDisplay";
function App() {
  return (
    <>
      <Switch>
        <Route path="/fresh" exact component={Fresh} />
        <Route path="/floral" exact component={Floral} />
        <Route path="/oriental" exact component={Oriental} />
        <Route path="/woody" exact component={Woody} />
        <Route path="/" exact component={HomePage} />
        <Route path="/store" component={StoreContent} />
        <Route path="/plants" exact component={PlantsPage} />
        <Route path="/plantdisplay" exact component={PlantDisplay}/>
        <Route path="/cabinet" exact component={CabinetPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="*" render={() => <Lost />} />
      </Switch>
    </>
  );
}

export default App;
