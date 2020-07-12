import React from "react";
import { NavLink,Route } from "react-router-dom";
import { products } from "../../constants";
import "./SingleProductPage.css";

const SingleProductPage = ({ match }) => {
  const productId = +match.params.id;
  const productName = products.find((elem) => elem.id === productId).name;
  const productTitle = products.find((elem) => elem.id === productId).title;
  const productImg = products.find((elem) => elem.id === productId).img;
  const productPrice = products.find((elem) => elem.id === productId).price;
  const productPrefix = products.find((elem) => elem.id === productId).prefix;
  const productDesc = products.find((elem) => elem.id === productId).desc;
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
        />
        <h4 className="price">
          {productPrefix}
          {productPrice.toFixed(2)}
        </h4>
        <NavLink 
        className="cp"
        key={productId} 
        to={`/cart/${productId}`}>
         ADD TO CART
        </NavLink>
        <div className="bts">
          <NavLink className="pp" to="/shop/:id">
            BACK TO SHOP
          </NavLink>
        </div>
        <div className="cartp">
        <Route path="/cart/:id"/>
      </div>

      </main>
    </>
  );
};

export default SingleProductPage;
