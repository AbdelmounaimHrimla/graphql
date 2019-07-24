import React, { Component } from 'react';
import './css/NavBar.css';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div className="myNavBar">
                <ul className="myNav">
                    <NavLink to="/"><li className="item">Home</li></NavLink>
                    <NavLink to="/books"><li className="item">Books</li></NavLink>
                    <NavLink to="/authors"><li className="item">Authors</li></NavLink>
                    <NavLink to="/categories"><li className="item">Categories</li></NavLink>
                </ul>
            </div>
        );
    }
}

export default NavBar;