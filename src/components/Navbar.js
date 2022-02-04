import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                {/* <a className="navbar-link" href="https://cspdevs000.github.io/G5-tower-ascender/" target="_blank">G5 Tower Ascender</a> */}
                <a className="navbar-link" href="https://my-parks.herokuapp.com/" target="_blank">myParks</a>
                <a className="navbar-link" href="https://neighborly-application.herokuapp.com/" target="_blank">Neighborly</a>
                <a className="navbar-link" href="https://viral-covid.herokuapp.com/" target="_blank">Viral</a>
            </div>
        );
    }
}

export default Navbar;