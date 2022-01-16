import React from 'react';
import './Animation.css';

function Animation(props) {
  return (
    <div>
          <h4 className="animation">     
          <div className="animation-div"> 
              <ul className="flip4"> 
                  <li><a className="soundcloud-link" href='https://soundcloud.com/deflect0r' target="_blank">DJ</a></li>
                  <li>Web Developer</li>
                  <li>Software Engineer</li>  
                  <li>A/V Enthusiast</li> 
              </ul>
          </div>  
        </h4>
    </div>
  );
}

export default Animation;