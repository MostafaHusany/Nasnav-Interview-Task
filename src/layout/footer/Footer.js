import React from 'react';
import '../layout.scss';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer-info row'>
                <div className='col-md-6'>
                    <div className="footer-about">
                        <img src="./images/yellow-logo.svg"/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia</p>
                        <p>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="footer-website-map">
                        <div className='subscribe-box'>
                            <h3>Subscribe to our newsletter</h3>
                            <div className='subscribe-input'>
                                <input defaultValue="" placeholder='Enter Your Mail'/>
                                <button>
                                    <span>Subscribe</span>
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                        <div className='footer-links row'>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <a href='#'>About Us</a>
                                    </li>
                                    <li>
                                        <a href='#'>Contact Us</a>
                                    </li>
                                    <li>
                                        <a href='#'>Track Order</a>
                                    </li>
                                    <li>
                                        <a href='#'>Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href='#'>Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href='#'>Sell With Us</a>
                                    </li>
                                    <li>
                                        <a href='#'>Shipping And Returns</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <a href='#'>
                                            <img src="./images/facebook.svg"/>
                                            <span>/YESHTERY</span>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href='#'>
                                            <img src="./images/linkedin.svg"/>
                                            <span>/YESHTERY</span>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href='#'>
                                            <img src="./images/insta.svg"/>
                                            <span>/YESHTERY</span>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href='#'>
                                            <img src="./images/twitter.svg"/>
                                            <span>/YESHTERY</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="footer-meta row">
                <div className='col-md-6'>
                    <p>© 2021 yeshtery, all rights reserved.</p>
                </div>
                <div className='col-md-6'>
                    <img src="./images/cash.png" />
                    <img src="./images/visa.png" />
                    <img src="./images/mastercard.png" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer