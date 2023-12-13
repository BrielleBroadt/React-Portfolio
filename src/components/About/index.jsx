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
        <p>
Welcome to my corner of the digital world! I'm Brielle Broadt, a recent graduate of the prestigious Rutgers University Coding Bootcamp,
 proudly holding a certificate as a Full Stack Web Developer. Embarking on the path of web development has been an 
 exhilarating journey for me. Throughout the intensive bootcamp, I had the privilege of tackling diverse challenges and 
 working on exciting projects, all of which you can explore by clicking on the "Projects" section.
<br></br>
My educational journey is a tapestry of diverse experiences, reflecting my commitment to continuous learning. I hold 
certifications as a 200-hour Registered Yoga Teacher, an Associates of Science degree, and, most recently, the coveted 
Full Stack Web Developer certification. Currently, I am on the cusp of completing my Bachelors in Applied Professional Communications at Rowan 
University, with a slated graduation in 2025.
<br></br>
Looking ahead, my passion for cutting-edge technology and web development is propelling me towards new horizons. 
I am gearing up to further my education, pursuing a Masters in Computer and Information Teachnology. The ultimate goal?
 Attaining a Ph.D. in AI to contribute significantly to the ever-evolving landscape of artificial intelligence. Join me on 
 this exciting journey as I explore the realms of technology and knowledge!
          
          </p>
      </div>
    </div>
  )
}

export default About