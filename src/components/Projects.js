import React, { Component } from 'react';
import './Projects.css';


class Projects extends Component {
    render() {
        return (
            <div className='projects-container'>
                <div className='project-card'>
                    <a href='' className='project-img'></a>
                </div>
                <div className='project-card'>
                    <p>PROJECT 2</p>
                </div>
                <div className='project-card'>
                    <p>PROJECT 3</p>
                </div>
                <div className='project-card'>
                    <p>PROJECT 4</p>
                </div>
            </div>
        );
    }
}

export default Projects;