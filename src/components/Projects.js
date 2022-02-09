import React, { Component } from 'react';
import {CollapsibleOne, CollapsibleTwo, CollapsibleThree, CollapsibleFour} from './Collapsible';
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
                    <h2 className='project-title'>Viral</h2>
                    <a href='https://viral-covid.herokuapp.com/' target="_blank" rel="noreferrer" className='project-img-a'>
                        <img src={viral} alt="project-1" className='project-img'/>
                    </a>
                    <div className='collapsible'>
                        <CollapsibleTwo />
                    </div>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>Neighborly</h2>
                    <a href='https://neighborly-application.herokuapp.com/' target="_blank" rel="noreferrer" className='project-img-a'>
                        <img src={neighborly} alt="project-2" className='project-img'/>
                    </a>
                    <div className='collapsible'>
                        <CollapsibleOne />
                    </div>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>myParks</h2>
                    <a href='https://my-parks.herokuapp.com/' target="_blank" rel="noreferrer" className='project-img-a'>
                        <img src={myparks} alt="project-3" className='project-img'/>
                    </a>
                    <div className='collapsible'>
                        <CollapsibleThree />
                    </div>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>G5 Tower Ascender</h2>
                    <a href='https://cspdevs000.github.io/G5-tower-ascender/' rel="noreferrer" target="_blank" className='project-img-a'>
                        <img src={g5towerascender} alt="project-4" className='project-img'/>
                    </a>
                    <div className='collapsible'>
                        <CollapsibleFour />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;