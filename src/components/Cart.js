import React, { useEffect, useState } from "react";
import closebtn from "../images/close-btn.svg";

const Cart = (props) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let sum = 0;
        props.cartItems.forEach(item => sum += item.price*item.quantity);
        setTotal(sum);
    },[props.cartItems]);

    if (props.showCart) 
    return(
    <div className='Cart'>
        <div className='cart-header'>
            <div className="close-btn" onClick={props.toggleCart}><img src={closebtn}></img></div>
            Shopping cart
        </div>
        <div className='cart-items'>
            {props.cartItems.length == 0 ? <div>Your cart is empty.</div> : null}
            {props.cartItems.map(item => 
            <div className='card' key={item.productID}>
                <div className='card-img'><img src={item.img}></img></div>

                <div className='card-column'>
                    <div className='card-qty-text'>Quantity</div>
                    <div className='card-qty'>
                        <div className='card-qty-btn minus' onClick={() => props.changeQty('decrease', item.productID)}>-</div>
                        <div className='card-qty-value'>{item.quantity}</div>
                        <div className='card-qty-btn plus' onClick={() => props.changeQty('increase', item.productID)}>+</div>
                    </div>
                </div>

                <div className='card-column'>
                    <div className='card-price-text'>Price</div>
                    <div className='card-price'>{(item.price*item.quantity).toFixed(2)+'$'}</div>
                </div>
                
                

            </div>)}
        </div>

        <div className='cart-menu'>
            <div className='total'>Total: {total.toFixed(2)+'$'}</div>
            <div className='proceed-btn'>Proceed to checkout</div>
        </div>
    </div>
    )
    else return(null)
}

export default Cart;