import React,{useState} from "react";
import { EmptyCart } from "../../components";
import { Item } from "../../components";
import { items } from "../../constants";
import { NavLink } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {

  const [quantity, setQuantity] = useState(0);


  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity - 1);
  return (
    <>
      <section className="cart">
        <h2 className="cp">I am in the Cart Page</h2>
        <EmptyCart />
        <ul className="cul">
          {items.map((item) => (
            <li key={item.id} className="cit">
              <Item item={item} />
              <div className="btns">
                <button className="less" onClick={decreaseQty}>
                  -
                </button>
                <h3 className="qty">{quantity}</h3>
                <button className="add" onClick={increaseQty}>
                  +
                </button>
              </div>
            </li>
          ))}
          ;
          <li className="cpl">
            <NavLink className="pp" to="/shop">
              BACK TO SHOP
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};
export default CartPage;
