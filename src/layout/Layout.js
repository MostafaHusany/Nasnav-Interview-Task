import React, { useState,useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

import Cart from '../components/cart/Cart';

const Layout = ({ children, cart, showCart, toggleCart, removeProductFromCart }) => {
  
  return (
    <div>
        <Header toggleCart={toggleCart} cartCount={cart.count}/>
        
        <div className='container'>
          {children}
        </div>

        <Footer/>
        
        <Cart cart={cart} showCart={showCart} toggleCart={toggleCart} removeProductFromCart={removeProductFromCart}/>
    </div>
  )
}

export default Layout;