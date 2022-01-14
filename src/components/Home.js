import React, { Component } from 'react';
import bkgdSpin from '../bkgd.svg';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <img src={bkgdSpin} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Home;