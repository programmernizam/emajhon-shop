import React from 'react';

const Product = ({product, addToCart}) => {
    const {img, name, price, seller, ratings} = product
    return (
        <div className="col">
            <div className='card h-100'>
            <img className='card-img-top' src={img} alt="" />
            <div className="card-body text-start">
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>Price: ${price}</p>
                <p className='card-text'>Manufacture: {seller}</p>
                <p className='card-text'>Ratings: {ratings}star</p>

            </div>
            <div className="cart-btn">
                <button onClick={()=>addToCart(product)} className='btn btn-warning w-100 p-0 rounded-0'><p>Add to cart</p></button>
            </div>
        </div>
        </div>
    );
};

export default Product;