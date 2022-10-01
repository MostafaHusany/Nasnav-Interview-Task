import React from 'react';
import './productCard.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ product }) => {
  return (
    <>
        <div className="card">
            <LazyLoadImage effect="blur" src={product.main_img} className="card-img-top"/>
            
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                
                <div className="card-details">
                    <div className="row">
                        <div className="col-6">
                            <span className="card-price">{product.price} <span>LE</span></span>
                        </div>
                        <div className="col-6">
                            <div className="card-brand">
                                <img src={product.brand_img}/>
                            </div>
                        </div>
                    </div>
                </div>{/** card-details */}

                <div className="card-rating">
                    <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>{/** rating */}
                    <h5>4.5 of 5</h5>
                </div>{/** card-rating */}

                <div className="card-source">
                    <p className="text-center">card-rating : <span className="fw-bold">Genena Mall</span></p>
                </div>
            </div>
        </div>{/** card */}
    </>
  )
}

export default ProductCard