import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = parseInt((total * 0.1).toFixed(2));

    let grandTotal = total + shipping + tax;
    return (
        <div>
            <div className='ps-lg-5 text-start'>
                <h2>Order Summary</h2>
                <h6>Selected items : {cart.length}</h6>
                <h6>Total price: ${total}</h6>
                <h6>Shipping: ${shipping}</h6>
                <h6>Tax: ${tax}</h6>
                <h5 className='text-info'>Grand total: <span className='text-white'>${grandTotal}</span></h5>
            </div>
        </div>
    );
};

export default Cart;