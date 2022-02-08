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
                    <a href='https://neighborly-application.herokuapp.com/' target="_blank" rel="noreferrer" className='project-img-a'>
                        <img src={neighborly} alt="project-1" className='project-img'/>
                    </a>
                    <p className='project-description'>
                        A closed social media application designed entirely in Django. If you'd like to test the search, search for the word 'test'. If you'd like to test user functionality with an already populated message board, sign in with username: testuser1, password: berenstein
                    </p>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>Viral</h2>
                    <a href='https://viral-covid.herokuapp.com/' target="_blank" rel="noreferrer" className='project-img-a'>
                        <img src={viral} alt="project-2" className='project-img'/>
                    </a>
                    <p className='project-description'>
                        A MERN application for getting COVID data by county. User can update vaccine card photo and set the county they live in for easy access to relevant information. Please forgive Heroku for the slow initial loading time of the landing page.
                    </p>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>myParks</h2>
                    <a href='https://my-parks.herokuapp.com/' target="_blank" rel="noreferrer" className='project-img-a'>
                        <img src={myparks} alt="project-3" className='project-img'/>
                    </a>
                    <p className='project-description'>
                        An EJS / express application for archiving user's national park visits. User can keep a list of parks they've visited, view park info and add 'memory' posts.
                    </p>
                </div>
                <div className='project-card'>
                    <h2 className='project-title'>G5 Tower Ascender</h2>
                    <a href='https://cspdevs000.github.io/G5-tower-ascender/' rel="noreferrer" target="_blank" className='project-img-a'>
                        <img src={g5towerascender} alt="project-4" className='project-img'/>
                    </a>
                    <p className='project-description'>
                        My first development project, a cheeky and simple HTML browser game. Use a & d keys to move the character to either side of the tower.
                    </p>
                </div>
            </div>
        );
    }
}

export default Projects;