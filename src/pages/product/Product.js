import React, { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ProductCard from '../../components/product/ProductCard';

import "./product.scss";

const Product = ({ product, addProductToCart, similarProducts }) => {

    const [imgStyle, setImgStyle]   = useState("translateX(0px)");
    const [nomImgs, setNomImgs]     = useState(product.images.length);

    const moveImagesLeft = () => {
        if (nomImgs % 4 != 0) {
            setImgStyle((prevState) => {
                return prevState + " translateX(-120px)";
            });

            setNomImgs((prevState) => {
                return prevState - 1;
            })
        } else {
            setImgStyle('translateX(0px)');
            setNomImgs(6);
        }
    };

    const moveImagesRight = () => {
        if (nomImgs < product.images.length) {
            setImgStyle((prevState) => {
                return prevState + " translateX(120px)";
            });

            setNomImgs((prevState) => {
                return prevState + 1;
            })
        } else {
            setNomImgs(nomImgs - (product.images.length % 4));
            setImgStyle(' translateX(-120px)'.repeat(6 % 4));
        }
    };

    const [quantity, setQuantity] = useState(1);

    const addQuantityt = () => {
        setQuantity(prevState => {
            return prevState + 1;
        })
    };

    const removeQuantityt = () => {
        quantity > 1 && setQuantity(prevState => {
            return prevState - 1;
        }) 
    };

    
    const [mainImage, setMainImage] = useState(''); 

    const selectMainImage = (imgSrc) => {
        setMainImage(imgSrc);
    };

    useEffect(() => {
        setMainImage(product.main_image);
    }, [product]);

    const renderdSimilarProducts = similarProducts.map((product, i) => (<ProductCard key={i} product={product} />));
    const rendredImageSlider = product.images.map((img, i) => (<LazyLoadImage onClick={() => selectMainImage(img)} effect="blur" key={i} style={{transition: 'transform 0.5s', transform : imgStyle}} src={img} />));
    
    return (
        <div className="product">
            {
                product ? 
                
                    <div className="row">
                        <div className="col-md-5">
                            <div className="img-slider">
                                <div className="main-img">
                                    <LazyLoadImage  effect="blur" src={mainImage} />
                                </div>

                                <div className="min-img">
                                    <button
                                        className="slider-btn slider-left"
                                        onClick={moveImagesLeft}
                                    >
                                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    </button>

                                    <div className="images">
                                        { rendredImageSlider }
                                    </div>

                                    <button className="slider-btn slider-right" onClick={moveImagesRight}>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-7">
                            <div className="product-info">
                                <div className="brand-logo">
                                    <LazyLoadImage effect="blur" src={product.brand} />
                                </div>
                                
                                <div className="details">
                                    <p className="description">{product.description}</p>
                                    <p className="category">{product.category}</p>
                                </div>

                                <ul className="rating">
                                    <li className="rating-stars">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                    </li>
                                    <li className="rating-ratio">
                                        <p>{product.rating}</p>
                                    </li>
                                    <li className="rating-users">
                                        <p>{product.rated_users}</p>
                                    </li>
                                </ul>

                                <ul className="price seprator">
                                    <li>
                                        <h3>{product.price}<span>LE</span></h3>
                                    </li>
                                    <li>
                                        <span>9,999LE</span>
                                    </li>
                                    <li>
                                        <span>30% Off</span>
                                    </li>
                                </ul>
                                
                                <div className="sizing seprator">
                                    <h4>Size</h4>
                                    <ul>
                                        <li className="size">small</li>
                                        <li className="size">medium</li>
                                        <li className="size size-active">large</li>
                                        <li className="size">large</li>
                                        <li className="size">X large</li>
                                        <li className="size">XX large</li>
                                    </ul>
                                </div>

                                <div className="coloring seprator">
                                    <h4>Color</h4>
                                    <ul>
                                        <li className="color color-active">
                                            <LazyLoadImage effect="blur" src="./images/product/color_sample_black_min.png"/>
                                        </li>
                                        
                                        <li className="color">
                                            <LazyLoadImage effect="blur" src="./images/product/color_sample_red_min.png"/>
                                        </li>
                                    </ul>
                                </div>

                                <div className="quantity">
                                    <h4>Quantity</h4>
                                    <ul>
                                        <li>
                                            <button onClick={removeQuantityt} className="quantity-btn">-</button>
                                        </li>
                                        
                                        <li>
                                            <input onChange={() => null} value={quantity}/>
                                        </li>
                                        
                                        <li>
                                            <button onClick={addQuantityt} className="quantity-btn">+</button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="cart-controller">
                                    <button onClick={() => addProductToCart(product, quantity)} className="cart-btn add-to-cart">Add To Cart</button>
                                    <button className="cart-btn buy-from-store">Pickup Frome Store</button>
                                </div>
                            </div>
                        </div>
                    </div>
                : 
                <div className="spinner-container text-center">
                    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            {
                similarProducts ? 
                <div className="similar-products-slider">
                    <h3>Similar Products</h3>
                    <p>You may like these products also</p>

                    <div className="slider-container">
                    
                        { renderdSimilarProducts }

                    </div>
                </div>

                :

                <div className="spinner-container text-center">
                    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default Product;
