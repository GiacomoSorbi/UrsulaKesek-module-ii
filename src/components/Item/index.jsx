import React from "react";
import { items } from "../../constants";
import "./Item.css";

const Item = ({ match }) => {
  const itemId = match.params.id;
  const itemImg = items.find((elem) => elem.id === itemId).img;
  const itemPrefix = items.find((elem) => elem.id === itemId).prefix;
  const itemPrice = items.find((elem) => elem.id === itemId).price;
  const itemTitle = items.find((elem) => elem.id === itemId).title;

  return (
    <>
      <div className="item">
        <main className="item-one">
          <h2 className="iid">{itemId}</h2>
          <p className="ipt">{itemTitle}</p>
          <div
            className="iimg"
            style={{ backgroundImage: `url(${itemImg}` }}
          ></div>
          <h4 className="price">
            {itemPrefix}
            {itemPrice.toFixed(2)}
          </h4>
        </main>
      </div>
    </>
  );
};

export default Item;
