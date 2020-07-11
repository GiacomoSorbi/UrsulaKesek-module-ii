import React from "react";
import { NavLink } from "react-router-dom";
import { products } from "../../constants";
import "./SingleProductPage.css";

const SingleProductPage = ({ match }) => {
  const productId = +match.params.id;
  const productName = products.find((elem) => elem.id === productId).name;
  const productTitle = products.find((elem) => elem.id === productId).title;
  const productImg = products.find((elem) => elem.id === productId).img;
  const productPrice = products.find((elem) => elem.id === productId).price;
  const productPrefix = products.find((elem) => elem.id === productId).prefix;
  return (
    <>
      <div className="product">
        <h2 className="pn">
         {productName}
        </h2>
        <h2 className="pt">{productTitle}</h2>
        <div
          className="pimg"
          style={{ backgroundImage: `url(${productImg}` }}
        />
        <h4 className="price">
          {productPrefix}
          {productPrice.toFixed(2)}
        </h4>
        <NavLink className="pp" to="/shop">
          BACK TO PRODUCTS
        </NavLink>
      </div>
    </>
  );
};

export default SingleProductPage;
