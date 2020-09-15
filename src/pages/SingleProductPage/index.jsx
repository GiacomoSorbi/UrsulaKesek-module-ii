import React from "react";
import { NavLink } from "react-router-dom";
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

  return (
    <>
      <main className="product">
        <div className="pdesc">
          <h2 className="pn">
            {productId} - {productName}
          </h2>
          <h3 className="pt">
            {productTitle} - {productDesc}
          </h3>
        </div>
        <div
          className="pimg"
          style={{ backgroundImage: `url(${productImg}` }}
        ></div>
        <h4 className="price">
          {productPrefix}
          {productPrice.toFixed(2)}
        </h4>
        <div className="links">
          <NavLink
            key={productId}
            className="item-link"
            to={`/cartp/${productId}`}
          >
            {productTitle}
          </NavLink>
          <h4>Add</h4>
        </div>
      </main>
    </>
  );
};

export default SingleProductPage;
