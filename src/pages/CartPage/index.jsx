import React, { useState } from "react";
import { EmptyCart } from "../../components";
import { items } from "../../constants";
import { NavLink, Route } from "react-router-dom";
import { Item } from "../../components";
import "./CartPage.css";

const CartPage = () => {
  const [quantity, setQuantity] = useState(0);
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity - 1);
  return (
    <>
      <section className="cart">
        <div>
          <h2 className="cp">I am in the Cart Page</h2>
          <EmptyCart />
          <div className="cpitems">
            {items.map((item) => (
              <NavLink
                key={item.id}
                className="item-link"
                to={`/cartp/${item.id}`}
              >
                {item.id}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="cpcards">
          <Route
            path="/cartp"
            render={() => (
              <div className="itemp">
                <h2 className="iptitle">ITEMS</h2>
              </div>
            )}
          />
          <div className="cpi">
            <Route path="/cartp/:id" component={Item} />
          </div>

          <div className="btns">
            <button className="less" onClick={decreaseQty}>
              -
            </button>
            <h3 className="qty">{quantity}</h3>
            <button className="add" onClick={increaseQty}>
              +
            </button>
          </div>
          <div className="cpl">
            <NavLink className="pp" to="/shop">
              BACK TO SHOP
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartPage;
