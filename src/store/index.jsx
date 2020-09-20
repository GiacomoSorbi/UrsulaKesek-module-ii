import React, { useState } from "react";
import "./Store.css";
import Nav from "./components/Nav";
import StoreContent from "./StoreContent";

const Store = () => {
  const [activeTab, setActiveTab] = useState("shop");

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((previousCart) => [...previousCart, item]);
  };

  const totalCart = (cart) => {
    const totalItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0,
      };
      summary[item.id].count++;
      return summary;
    }, {});
    return Object.values(totalItems);
  };

  const removeItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const cartCopy = [...cart];
        cartCopy.splice(index, 1);
        return cartCopy;
      });
    }
  };

  return (
    <div className="storepage">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <section className="content">
        <StoreContent
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveItem={removeItem}
          cart={totalCart(cart)}
        />
      </section>
    </div>
  );
};

export default Store;
