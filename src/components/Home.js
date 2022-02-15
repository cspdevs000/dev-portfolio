import React, { Component } from 'react';
import Animation from './Animation'
import bkgdSpin from '../bkgd.svg';
import './Home.css';


class Home extends Component {
    
    render() {
        return (
            <div className='home-container'>
                <Animation />
                <div className='bkgd-container-home'>
                    <img src={bkgdSpin} className="bkgd-img-home" alt="logo" />
                </div>
                <div className='projects-countainer'>
                    <a className="projects-link" href="/projects" >Projects </a>
                </div>
                <div className='about-me-countainer'>
                    <a className="about-me-link" href="/about" >About Me </a>
                </div>
            </div>
        );
    }
}

export default Home;