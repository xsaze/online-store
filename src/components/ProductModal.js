import React from "react";
import { useState } from "react";
import productsDB from "./Products";
import './ProductModal.css';
import closebtn from "../images/close-btn.svg";

const ProductModal = (props) => {

    const [imageSize, setImageSize] = useState('360px');

    const product = productsDB[productsDB.findIndex(item => item.productID === props.id)];

    const handleClick = (e) => {
        if(e.target.id == 'modal-buy-btn'){
            props.addToCart(product.productID);
            props.toggleProductModal();
            props.toggleCart();
        } else if (e.target.id == '') {
            return;
        } else if (e.target.id == 'modal-image'){
            zoomImage();
        } else if (e.target.id == 'modal' || 'modal-close-btn'){
            if(imageSize === '720px') {
                zoomImage();
            }
            props.toggleProductModal();
        }
    }

    const zoomImage = () => {
        if(imageSize === '360px') {setImageSize('720px')}
        else setImageSize('360px');
    }

    if (props.showModal && imageSize === '360px') {
        return(
            <div className='modal' id='modal' onMouseDown={handleClick}>
                <div className='modal-image'><img id='modal-image' src={product.img} width={imageSize}></img></div>
                <div className='modal-desc'>{product.desc}</div>
                <div className='modal-price'>{product.price+'$'}</div>
                <div className='modal-buy-btn' id='modal-buy-btn'>Add to cart</div>
                <div className='modal-close-btn'><img id='modal-close-btn' src={closebtn}></img></div>
            </div>
        )
    } else if (props.showModal && imageSize === '720px') {
        return(
            <div className='modal' id='modal' onMouseDown={handleClick}>
                <div className='modal-image-big'><img id='modal-image' src={product.img} width={imageSize}></img></div>
            </div>
        )
    } else {
        return null
    }
}

export default ProductModal;