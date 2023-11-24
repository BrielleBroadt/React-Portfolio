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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Inventore sapiente aliquid quasi quo natus in, saepe non quia voluptatibus, 
          fugit illum id, maiores laboriosam sit ducimus similique necessitatibus error omnis?</p>
      </div>
    </div>
  )
}

export default About