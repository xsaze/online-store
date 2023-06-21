import React from "react";
import './Product.css';

const Product = (props) => {

    return(
        <div className='product-card'>
            <div className='product-img'><img src={props.img} onClick={() => props.toggleProductModal(props.id)}></img></div>
            <div className='desc'>{props.desc}</div>
            <div className='row'>
                <div className='buy-btn' onClick={() => props.addToCart(props.id)}>Add to cart</div>
                <div className='product-price'>{props.price+'$'}</div>
                
            </div>
        </div>
    )
}

export default Product;