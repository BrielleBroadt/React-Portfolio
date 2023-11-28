import React from 'react'
import profilepic from '../../image/Breezy.jpg'
import './about.css'
const About = () => {
  return (
    <div className="about">
      <div className="img-wrapper">
        <img src={profilepic} alt="meeee" />
      </div>
      <div className="about-me-content">
        <p>Welcome to my corner of the digital world! I'm Brielle Broadt, a recent graduate of the Rutgers University Coding Bootcamp, Where I successfully earned my certificate as a Full stack Web Developer. Stepping into the world of web development has been an exciting journey. 
          Throughout the bootcamp I had the opportunity to work on diverse challanges and projects that you can find once you click projects!</p>
      </div>
    </div>
  )
}

export default About