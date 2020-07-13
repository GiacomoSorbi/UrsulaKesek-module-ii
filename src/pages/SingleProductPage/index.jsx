import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { products } from "../../constants";
import "./SingleProductPage.css";

const SingleProductPage = ({ match }) => {
  const productId = match.params.id;
  const productName = products.find((elem) => elem.id === productId).name;
  const productTitle = products.find((elem) => elem.id === productId).title;
  const productImg = products.find((elem) => elem.id === productId).img;
  const productPrice = products.find((elem) => elem.id === productId).price;
  const productPrefix = products.find((elem) => elem.id === productId).prefix;
  const productDesc = products.find((elem) => elem.id === productId).desc;

  const [cart, Setcart] = useState([0]);

  const addToCart = () => {
    Setcart((oldCart) => [...oldCart, products]);
  };

  return (
    <>
      <main className="product">
        <h2 className="pn">
          {productId}-{productName}
        </h2>
        <p className="pt">
          {productTitle} - {productDesc}
        </p>
        <div
          className="pimg"
          style={{ backgroundImage: `url(${productImg}` }}
        ></div>
        <h4 className="price">
          {productPrefix}
          {productPrice.toFixed(2)}
        </h4>
        <button onClick={addToCart}>+</button>
        <div className="links">
          <NavLink className="cp" to="/cart/">
            TO CART
          </NavLink>
        </div>
        <div className="cartp">
          <Route path="/cart" />
        </div>
      </main>
    </>
  );
};

export default SingleProductPage;
