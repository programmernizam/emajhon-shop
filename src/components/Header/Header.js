import "./Header.css"
import logo from '../../images/Logo.svg'
import React from 'react';

const Header = () => {
    return (
        <nav className="header navbar navbar-expand navbar-dark">
            <div className="container">
                <img src={logo} alt="" />
                <div className="navbar-nav">
                    <li className="nav-item">
                        <a href="/shop" className="nav-link">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a href="/order" className="nav-link">Order</a>
                    </li>
                    <li className="nav-item">
                        <a href="/inventory" className="nav-link">Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">About</a>
                    </li>
                </div>     
            </div>
        </nav>
    );
};

export default Header;