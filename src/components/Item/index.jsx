import React from "react";
import { products } from "../../constants";
import "./Item.css";

const Item = ({ match }) => {
  const productId = match.params.id;
  const productImg = products.find((elem) => elem.id === productId).img;
  const productPrefix = products.find((elem) => elem.id === productId).prefix;
  const productPrice = products.find((elem) => elem.id === productId).price;
  const productTitle = products.find((elem) => elem.id === productId).title;

  return (
    <>
      <div className="item">
        I am an Item
        <main className="item-one">
          <h2 className="iid">{productId}</h2>
          <p className="ipt">{productTitle}</p>
          <div
            className="iimg"
            style={{ backgroundImage: `url(${productImg}` }}
          ></div>
          <h4 className="price">
            {productPrefix}
            {productPrice.toFixed(2)}
          </h4>
        </main>
      </div>
    </>
  );
};

export default Item;
