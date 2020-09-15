import React, { useState } from "react";
// import { EmptyCart } from "../../components";
import { items } from "../../constants";
import { NavLink, Route } from "react-router-dom";
import { Item } from "../../components";
import "./CartPage.css";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  function increaseQty() {
    return setQuantity(quantity + 1);
  }
  const decreaseQty = () => {
    if (quantity - 1 >= 0) {
      setQuantity(quantity - 1);
    }
    setQuantity((quantity) => (quantity));
  };
  return (
    <>
      <section className="cart">
        <div>
          {/* <h2 className="cp">I am in the Cart Page</h2> */}
          {/* <EmptyCart/> */}
          <div className="cpitems">
            {items.map((item) => (
              <NavLink
                key={item.id}
                className="item-link"
                to={`/cartp/${item.id}`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="cpcards">
          <Route
            path="/cartp"
            render={() => (
              <div>
                <h2 className="cptitle">ITEMS</h2>
              </div>
            )}
          />
          <div className="cpi">
            <Route path="/cartp/:id" component={Item} />

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
        </div>
      </section>
    </>
  );
};
export default CartPage;
