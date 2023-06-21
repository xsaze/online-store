import React from "react";
import { Link } from "react-router-dom";
import cart from '../images/shopping-cart.svg';

const Navbar = (props) => {
    return(
        <div className="Header">
            <Link to='/'><div className="title">SISSY</div></Link>
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/shop'>Products</Link>
                <Link to='/contact'>Contact</Link>
                <div className='cart-icon' onClick={props.toggleCart}><img src={cart}></img>{props.itemsCounter === 0 ? null : <div className='item-counter'>{props.itemsCounter}</div>}</div>
            </div>
        </div>
    )
};

export default Navbar;