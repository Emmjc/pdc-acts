import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand text-light" to="/">Brand</NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink 
                            to="/" 
                            className="nav-link text-light" 
                            activeClassName="active" 
                            exact
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/profile" 
                            className="nav-link text-light" 
                            activeClassName="active"
                        >
                            Profile
                        </NavLink>

                        <NavLink 
                            to="/mymainforms" 
                            className="nav-link text-light" 
                            activeClassName="active"
                        >
                            Main Forms
                        </NavLink>

                        <NavLink 
                            to="/contact" 
                            className="nav-link text-light" 
                            activeClassName="active"
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
