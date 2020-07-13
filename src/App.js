import React,{useState} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  CabinetPage,
  CartPage,
  Floral,
  Fresh,
  HomePage,
  Oriental,
  PlantsPage,
  ShopPage,
  Woody,
} from "./pages";
import Error from "./components/Error";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((oldCart) => [...oldCart, item]);
  };

  return (
    <>
      <Switch>
        <Route path="/fresh" exact component={Fresh} />
        <Route path="/floral" exact component={Floral} />
        <Route path="/oriental" exact component={Oriental} />
        <Route path="/woody" exact component={Woody} />
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/plants" exact component={PlantsPage} />
        <Route path="/cabinet" exact component={CabinetPage} />
        <Route path="/cartp" component={CartPage} />
        <Route path="*" render={() => <Error />} />
      </Switch>
    </>
  );
}

export default App;
