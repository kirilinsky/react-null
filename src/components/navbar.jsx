import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-secondary">
            <div className="navbar-brand">lololshechka</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/">home</NavLink>
                 </li>
                <li className="nav-item">
                     <NavLink className="nav-link" to="about">about</NavLink>
                </li>
            </ul>
        </nav>
        
    );
}

export default Navbar;
