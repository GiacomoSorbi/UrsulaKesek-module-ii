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
        <h4>I am the SingleProductpage!</h4>
        <h2>
          {productId} - {productName}
          {productTitle}
        </h2>
        <div
          className="pimg"
          style={{ backgroundImage: `url(${productImg}` }}
        />
              <h4 className="price">{productPrefix}{productPrice}</h4>

      </div>
      <NavLink className="pp" to="/shop">
        BACK TO PRODUCTS
      </NavLink>
    </>
  );
};

export default SingleProductPage;
