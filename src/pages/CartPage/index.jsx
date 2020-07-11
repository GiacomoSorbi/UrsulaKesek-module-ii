import React,{useState} from "react";
import { products } from "../../constants";
import { NavLink } from "react-router-dom";
import { EmptyCart } from "../../components";
import "./CartPage.css";

const CartPage = ({match}) => {
  const productsId = +match.params.id;
  const[ quantity,setQuantity]=useState(0);
  const increaseQty=()=>setQuantity(quantity+1);
  const decreaseQty=()=>setQuantity(quantity-1);
  return (
    <div>
      <h2>I am the Cart Page</h2>
      <h2 class="pn"> {productsId}</h2>
      <h2>{products.length === 0 ? <EmptyCart/>:"Nothing here to see"}</h2>
      <button className="less"onClick={decreaseQty}>-</button>
      <h3>{quantity}</h3>
      <button className="add" onClick={increaseQty}>+</button>
      <NavLink className="pp" to="/shop">
        BACK TO PRODUCTS
      </NavLink>
    </div>
  );
};
export default CartPage;
