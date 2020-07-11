import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./ShopPage.css";
import { products } from "../../constants";
import singleProductPage from "../SingleProductPage";

const ShopPage = () => (
  <>
    <header className="spheader">
      <h2 className="sph2">I am the Shop Page</h2>
      <h3 className="sppick">Click on any item P1 to P9</h3>
    </header>
    <section className="spitems">
      {products.map((product) => (
        <NavLink
          key={product.id}
          className="product-link"
          to={`/shop/${product.id}`}
        >
          {product.name}
        </NavLink>
      ))}
    </section>
    <section className="spcards">
      <Route
        path="/shop"
        render={() => (
          <div className="prodp">
            <h2 className="pptitle">PRODUCTS PAGE </h2>
          </div>
        )}
      />
      <div className="spp">
        <Route path="/shop/:id" component={singleProductPage} />
      </div>
      <div className="cp">
        <Route path="/cart"/>
      </div>
      {/* <NavLink className="product-link"to ="product2"> Product 2</NavLink>
<NavLink className="product-link"to ="product3"> Product 3</NavLink>
<NavLink className="product-link"to ="product4"> Product 4</NavLink> */}
    </section>
  </>
);
export default ShopPage;
