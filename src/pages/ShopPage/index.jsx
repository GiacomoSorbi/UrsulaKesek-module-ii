import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./ShopPage.css";
import { products } from "../../constants";
import SingleProductPage from "../SingleProductPage";


const ShopPage = ()=>{ 

  return (
    <>
      <header className="spheader">
        <h2 className="sph2">Choose your Scents Here:</h2>
        <h3 className="sppick">Click on any City or Island name.</h3>
      </header>
      <section className="spitems">
        {products.map((product) => (
          <NavLink
            key={product.id}
            className="product-link"
            to={`/shop/${product.id}`}
          >
            {product.title}
          </NavLink>
        ))}
      </section>
      <section className="spcards">
        <Route
          path="/shop"
          render={() => (
            <div className="prodp">
              <h3 className="pptitle">CITY SCENTS RANGE </h3>
            </div>
          )} />
        <div className="spp1">
          <Route path="/shop/:id" component={SingleProductPage} />
        </div>
      </section>
    </>

  );
}
export default ShopPage;
