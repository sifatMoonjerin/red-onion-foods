import React from 'react';
import logo from '../../resources/logo2.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  justify-content-md-between justify-content-center flex-wrap">
            <a className="navbar-brand" href="/home"><img src={logo} alt="Red Onion Foods"></img></a>
            <div className="navbar-nav flex-row">
                <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="/signup">Log In</a>
                <a className="nav-item nav-link" href="/signup">Sign Up</a>
            </div>
        </nav>
    );
};

export default NavBar;