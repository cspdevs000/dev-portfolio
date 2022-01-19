import React, { Component } from 'react';
import Animation from './Animation'
import bkgdSpin from '../bkgd.svg';
import './Home.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    handleName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    handleMessage(e) {
        this.setState({
            message: e.target.value,
        });
    }
    
    render() {
        return (
            <div className='home-container'>
                <Animation />
                <div className='bkgd-container'>
                    <img src={bkgdSpin} className="bkgd-img" alt="logo" />
                </div>
                <div className='about-me-countainer'>
                    <a className="about-me-link" href="/about" >About Me </a>
                </div>
                <div className='contact-form-container'>
                    <h1>Contact Me</h1>
                    {/* <input type="text" id="show-button">Contact Me</input> */}
                    <form className='contact-form' action="https://formsubmit.co/cspdevs000@gmail.com" method="POST">
                        <input className="contact-field" placeholder= "name"onChange={this.handleName.bind(this)} type="text" name="name" required /><br />
                        <input className="contact-field" id="contact-email" placeholder= "email" onChange={this.handleEmail.bind(this)} type="email" name="email" required /><br />
                        <input className="contact-form-textbox" placeholder="message" onChange={this.handleMessage.bind(this)} type="text" name="message" required /><br />
                        <button className="contact-form-button" type="submit">Send it</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;