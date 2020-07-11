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
  const productQuantity = products.find((elem) => elem.id === productId).quantity;
  const productDesc = products.find((elem) => elem.id === productId).desc;
  return (
    <>
      <div className="product">
        <h2 className="pn">
         {productName}
        </h2>
        <p className="pt">{productTitle} - {productDesc}</p>
        <div
          className="pimg"
          style={{ backgroundImage: `url(${productImg}` }}
        />
        <h4 className="price">
          {productPrefix}
          {productPrice.toFixed(2)}
          </h4>
          <button>-</button>
         <h4> {productQuantity}
        </h4>
        <button>+</button>
        <NavLink className="pp" to="/shop">
          BACK TO PRODUCTS
        </NavLink>
      </div>
    </>
  );
};

export default SingleProductPage;
