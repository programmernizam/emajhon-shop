import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const [cart, setCart] = useState([]);
    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='container-fluid '>
            <div className="row">
            <div className="col-8">
                <div className="container mt-5">
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {
                            products.map(product => <Product key={product.id} product = {product} addToCart = {addToCart}/>)
                        }
                </div>
                </div>
            </div>
            <div className="col-4 bg-danger text-white">
                <div className="position-fixed">
                    <Cart cart={cart}/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Shop;