import React from "react";
import Product from './Product.js';
import productsDB from './Products';

const Shop = (props) => {
    return(
        <div className="content-shop">
            {productsDB.map(product => <Product key={product.productID} id={product.productID} img={product.img} desc={product.desc} price={product.price} addToCart={props.addToCart} toggleProductModal={props.toggleProductModal} />)}
        </div>
    )
};

export default Shop;