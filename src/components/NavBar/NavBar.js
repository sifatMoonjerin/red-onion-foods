import React from 'react';
import logo from '../../resources/logo2.png';
import './NavBar.css';
import Auth from '../useAuth/useAuth';

const NavBar = () => {
    const auth = Auth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light  justify-content-md-between justify-content-center flex-wrap">
            <a className="navbar-brand" href="/home"><img src={logo} alt="Red Onion Foods"></img></a>
            <div className="navbar-nav flex-row">
                <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
                
                {auth.user? 
                    <a onClick={auth.signOut} className="nav-item nav-link"  href='/home'>Sign Out</a>:
                    <a className="nav-item nav-link" href="/signup">Sign Up</a>}
            </div>
        </nav>
    );
};

export default NavBar;