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
        <p>Welcome to my corner of the digital world! I'm Brielle Broadt, a recent graduate of the Rutgers University Coding Bootcamp, where I successfully earned my certificate as a Full stack Web Developer. Stepping into the world of web development has been an exciting journey. 
          Throughout the bootcamp I had the opportunity to work on diverse challanges and projects that you can find once you click projects!
          My educational background has a wide vasriety with Full Stack Web Developer certification, 
          200 hour Registered Yoga Teacher, Associates of Science, and finishing up a Bachelors in Communications
          at Rowan University. I am looking to gtaduate in 2025 and attend to Penn State for a Masters in Artificial Intelligence
          and one day have a PHD in AI!
          
          </p>
      </div>
    </div>
  )
}

export default About