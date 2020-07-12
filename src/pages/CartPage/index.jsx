import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { products } from "../../constants";
import { EmptyCart } from "../../components";
import "./CartPage.css";

const CartPage = ({ match }) => {
  const productId = +match.params.id;
  // const productImg = products.find((elem) => elem.id === productId).img;
  const [quantity, setQuantity] = useState(0);
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity - 1);
  // const quantityChanged = (quantity)=> {
  //   if(isNaN (quantity.value) || quantity.value <= -1)
  //   {quantity.value = 0}
  // }
  return (
    <>
      <section className="cart">
        <h2 className="cp">I am in the Cart Page</h2>
        <h3 className="empty">
          {products.length === 0 ? <EmptyCart /> : "Nothing to see Here"}
        </h3>
        <h2 className="cpid">{productId}</h2>
        {/* <div
          className="pimg"
          style={{ backgroundImage: `url(${productImg}` }}
        /> */}
        <div className="btns">
          <button className="less" onClick={decreaseQty}>
            -
          </button>
          <h3 className="qty">{quantity}</h3>
          <button className="add" onClick={increaseQty}>
            +
          </button>
        </div>
        <NavLink className="pp" to="/shop">
          BACK TO SHOP
        </NavLink>
      </section>
    </>
  );
};
export default CartPage;
