import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import Contact from './components/Contact.js';
import Cart from './components/Cart.js';
import ProductModal from './components/ProductModal';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import productsDB from './components/Products';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const [parent, enableAnimations] = useAutoAnimate();

  const [showCart, setShowCart] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [modalID, setModalID] = useState(0);

  const toggleProductModal = (id) => {
    if (showModal == false) {
      setShowModal(true);
      setModalID(id);
    } else {
      setShowModal(false);
      setModalID(0);
    }
  }
 
  const toggleCart = () => {
    showCart == false ? setShowCart(true) : setShowCart(false);
  }

  const addToCart = (id) => {
    let cartArray = cartItems;
    const findIndex = cartArray.findIndex(item => item.productID === id);
    if (findIndex === -1) {
      const newItem = {...productsDB[id-1],quantity : 1};
      cartArray.push(newItem);
    } else {
      cartArray[findIndex].quantity += 1;
    }
    setCartItems([...cartArray]);
  }

  const changeQty = (type, id) => {
    let cartArray = cartItems;
    
    if (type=='increase') {
      cartArray[cartArray.findIndex(item => item.productID === id)].quantity += 1;
    } else {
      if (cartArray[cartArray.findIndex(item => item.productID === id)].quantity === 1) {
        if (cartArray.length === 1) {
          cartArray = [];
        } else {
          const index = cartArray.findIndex(item => item.productID === id);
          cartArray.splice(index,1);
        }
      } else {
        cartArray[cartArray.findIndex(item => item.productID === id)].quantity -= 1;
      }
    }
    setCartItems([...cartArray]);
  }

  return (
    <BrowserRouter>
      <div className="App" ref={parent}>
        <Navbar showCart={showCart} toggleCart={toggleCart} itemsCounter={cartItems.length} />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} toggleProductModal={toggleProductModal} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Cart showCart={showCart} toggleCart={toggleCart} cartItems={cartItems} changeQty={changeQty} />
        <ProductModal showModal={showModal} id={modalID} toggleProductModal={toggleProductModal} toggleCart={toggleCart} addToCart={addToCart}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
