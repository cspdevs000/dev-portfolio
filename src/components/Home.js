import React, { Component } from 'react';
import Animation from './Animation'
import bkgdSpin from '../bkgd.svg';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <Animation />
                <div className='bkgd-container'>
                <img src={bkgdSpin} className="App-logo" alt="logo" />
                </div>
            </div>
        );
    }
}

export default Home;