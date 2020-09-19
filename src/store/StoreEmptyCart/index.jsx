import React from 'react';
import "./StoreEmptyCart.css";

const StoreEmptyCart=()=>{
    return(
        <section className="emptycart">
            <h1>There are no items in your cart.</h1>
            <h2>Take another look:Click on  SHOP and add items! </h2>
            <h2>Or check the weather in the Cities mentioned:Click on WEATHER.</h2>
        </section>
    )
}
export default StoreEmptyCart;