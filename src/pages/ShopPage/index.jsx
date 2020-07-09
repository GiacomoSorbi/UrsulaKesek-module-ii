import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./ShopPage.css";
import { products } from "../../constants";
import singleProductPage from "../SingleProductPage";

const ShopPage = () => (
  <>
    <h2 className="h2.sph2">I am the Shop Page</h2>
    {products.map((product) => (
      <NavLink
        key={product.id}
        className="product-link"
        to={`/shop/${product.id}`}
      >
        {product.name}
      </NavLink>
    ))}
    <Route
      path="/shop"
      render={() => <div>I am the products page</div>}
    />
    <Route path="/shop/:id" component={singleProductPage} />

    {/* <NavLink className="product-link"to ="product2"> Product 2</NavLink>
<NavLink className="product-link"to ="product3"> Product 3</NavLink>
<NavLink className="product-link"to ="product4"> Product 4</NavLink> */}
  </>
);
export default ShopPage;
