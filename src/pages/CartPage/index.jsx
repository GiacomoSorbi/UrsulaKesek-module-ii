import React from 'react'
import singleProductPage from "../SingleProductPage";
import EmptyCart from '../components/EmptyCart';
import './CartPage.css';
import SingleProductPage from '../SingleProductPage';

const CartPage=(({product,onClick})=>(
    <>
        {singleProductPage.length} === 0 ?<EmptyCart />
        <ul className="items">
            {singleProductPage.map(product => <li key={singleProductPage} className="item">
                <SingleProductPage singleProductPage={singleProductPage}>
                    <div className="btns">
                        <button className="less" onClick={onClick}>-</button>
                        <span className="qty"> {singleProductPage.qty}</span>
                        <button className="add" onClick={onClick}>+</button>
                    </div>
                </SingleProductPage>
            </li>
            )}
            <li className="total">Total: £

            </li>
        </ul>
    </>
));


export default CartPage;