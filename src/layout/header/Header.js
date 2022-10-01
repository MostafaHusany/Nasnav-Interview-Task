import React from 'react';
import '../layout.scss';

const Header = ({ toggleCart, cartCount }) => {
    return (
        <header>
            <div className='min-header'>
                <div className='container'>
                    <div className='logo'>
                        <img src="./images/hamberg.svg"/> 
                        <img src="./images/logo.svg"/> 
                    </div>

                    <div className='latest-news'>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>

                        <p>Valentine’s Day Offers! Buy Two Get One Free <a href="#">Shop Now</a></p>

                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>

                    <ul className='controllers'>
                        <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#">
                                <span>Contact Us</span>    
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span>Track Order</span>    
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span>Find A Store</span>    
                            </a>
                        </li>
                    </ul>
                </div>
            </div>{/** min-header */}

            <div className='user-header'>
                <div className='container'>
                    <div className='search'>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input defaultValue="" placeholder='Search'/>   
                    </div>

                    <div className='brand-logo'>
                        <img src="./images/add-brand.svg"/>
                    </div>

                    <ul className='controllers'>
                        <li className="cart-btn" onClick={toggleCart} style={{cursor : 'pointer'}}>
                            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            <a href="#">Cart</a>
                            <span>{cartCount}</span>
                        </li>
                        <li>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <a href="#">Wishlist</a>
                        </li>
                        <li>    
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>{/** user-header */}

            <nav className='navbar'>
                <div className='container'>
                    <ul>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">Unisex</a>
                        </li>
                        <li>
                            <a href="#">Kids</a>
                        </li>
                        <li>
                            <a href="#">Best Sellers</a>
                        </li>
                        
                        <li>
                            <a href="#">New Arrivals</a>
                        </li>

                        <li className="offers">
                            <a href="#">Offers</a>
                        </li>
                    </ul>
                </div>
            </nav>{/** navbar */}
        </header>
    );
}

export default Header;
