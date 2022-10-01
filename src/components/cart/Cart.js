import React from 'react'

import './cart.scss';

const Cart = ({ cart, showCart, toggleCart, removeProductFromCart }) => {
    const rendered_products = cart.products_id.map((product_id, i) => (
        <div key={i} className='selected-product mb-2'>
            <div className='row'>
                <div className='col-4'>
                    <img src={cart.products[product_id].main_image}/>
                </div>

                <div className='col-7'>
                    <div className='product-details'>
                        <p>{cart.products[product_id].description}</p>
                        <p>Quantity: {cart.products[product_id].quantity}</p>
                        
                        <div className='row'>
                            <div className='col-6'>
                                <h4>{cart.products[product_id].total_price} LE</h4>
                            </div>
                            <div className='col-6 text-end'>
                                <button onClick={() => removeProductFromCart(product_id)} className='remove-btn'>remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className={showCart ? 'cart show-cart' : 'cart'}>
        
            <div className='listed-product'>
                <button onClick={() => toggleCart(false)} className='close-card float-end'>
                    X
                </button>

                <h2 className='cart-title'>My Cart</h2>

                <hr/>
            
                <div className='products-in-cart'>
                    {rendered_products}
                </div>
                
                <hr/>

                <div className='selected-products-total text-center'>
                    <h2>Total: {cart.total} LE</h2>
                </div>

            </div>{ /** listed-product */}
        </div>
    );
}

export default Cart