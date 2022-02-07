import React, { Component } from 'react';
import Animation from './Animation'
import bkgdSpin from '../bkgd.svg';
import './AboutMe.css';


class AboutMe extends Component {
    render() {
        return (
            <div className='about-me-container'>
                <div className='about-animation'>
                    <Animation />
                </div>
                <div className='bkgd-container-about'>
                <img src={bkgdSpin} className="App-logo" alt="logo" />
                </div>
                <div className='about-me-content-container'>
                    <p className='about-me-content'>
                    A recent graduate of General Assembly's <br></br>Software Engineering Immersive bootcamp,<br></br> ready to get my career as a developer off the ground.
                    <br></br>I'm a DJ, musician, and run a <a className='embalming-link' href='https://yletalgnimlab.me/' target='_blank'> small run cassette label </a><br />out of Brooklyn, NY. <br></br>A former executive chef, A/V chief, art handler and video engineer, <br></br>I have proven my ability to adapt and succeed in a number of industries.
                    <br></br>Living with chronic pain has fueled <br></br>my decision to get out of the physical labor realm and <br></br>into a space where I can make an impact and take care of myself at the same time.
                    </p>
                </div>
                <div className='back-home-container'>
                <a className="back-home-link" href="/" >Back </a>
                </div>
            </div>
        );
    }
}

export default AboutMe;