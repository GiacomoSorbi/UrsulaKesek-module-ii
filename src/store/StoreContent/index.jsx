import React from 'react';
import StoreShopPage from '../StoreShopPage';
import StoreCartPage from '../StoreCartPage';
import items from '../constants';

const StoreContent = ({ tab, onAddToCart, onRemoveItem, cart }) => {


    switch (tab) {
        default:
        case 'shop':
            return <StoreShopPage items={items} onAddToCart={onAddToCart} />;
        case 'cart':
            return <StoreCartPage items={cart} onPlusOne={onAddToCart} onMinusOne={onRemoveItem} />
    }
};

export default StoreContent;