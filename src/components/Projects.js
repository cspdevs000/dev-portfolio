import React, { Component } from 'react';
import neighborly from '../img/neighborly_screenshot.png'
import viral from '../img/viral_screenshot.png'
import myparks from '../img/myparks_screenshot.png'
import g5towerascender from '../img/g5towerascender_screenshot.png'
import './Projects.css';


class Projects extends Component {
    render() {
        return (
            <div className='projects-container'>
                <div className='project-card'>
                    <h2 className='project-title'>Neighborly</h2>
                    <a href='https://neighborly-application.herokuapp.com/' className='project-img-a'>
                        <img src={neighborly} className='project-img'/>
                    </a>
                    <p className='project-description'>
                        description......
                    </p>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>Viral</h2>
                    <a href='https://viral-covid.herokuapp.com/' className='project-img-a'>
                        <img src={viral} className='project-img'/>
                    </a>
                    <p className='project-description'>
                        description......
                    </p>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>myParks</h2>
                    <a href='https://my-parks.herokuapp.com/' className='project-img-a'>
                        <img src={myparks} className='project-img'/>
                    </a>
                    <p className='project-description'>
                        description......
                    </p>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>G5 Tower Ascender</h2>
                    <a href='https://cspdevs000.github.io/G5-tower-ascender/' className='project-img-a'>
                        <img src={g5towerascender} className='project-img'/>
                    </a>
                    <p className='project-description'>
                        description......
                    </p>
                </div>
            </div>
        );
    }
}

export default Projects;