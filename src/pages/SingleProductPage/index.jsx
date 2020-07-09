import React from "react";
import { NavLink } from "react-router-dom";
import { products } from "../../constants";
import "./SingleProductPage.css";

const SingleProductPage = ({ match }) => {
  const productId = +match.params.id;
  const productName = products.find((elem) => elem.id === productId).name;
  return (
    <div className="product">
      <p>I am the SingleProductpage!</p>
      <p>
        PRODUCT NO: {productId} - {productName}
      </p>
      <NavLink className="pp" to="/shop">
        BACK TO PRODUCTS
      </NavLink>
    </div>
  );
};
export default SingleProductPage;
