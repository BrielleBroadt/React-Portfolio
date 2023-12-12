import React from 'react'
import './projects.css'

const projects = [
  {
    id: 1,
    title: 'Witty-Web-Wizard',
    description: 'Group project for Rutgers, API integration, HTML, javaScript, Tailwind',
    imageUrl: 'https://github.com/BrielleBroadt/Witty-Web-Wizard/assets/135186013/c00d67a6-56c6-4a3c-a7dc-e3fd170f98a5',
    repoLink: 'https://github.com/BrielleBroadt/Witty-Web-Wizard',
  },
  {
    id: 1,
    title: 'SVG-Logo-Maker',
    description: 'Inquierer, jest, javascript',
    imageUrl: 'https://github.com/BrielleBroadt/Witty-Web-Wizard/assets/135186013/f747d4c5-27fd-43d6-80a7-9a5564d41e44',
    repoLink: 'https://github.com/BrielleBroadt/SVG-Logo-Maker',
  },
  {
    id: 1,
    title: 'Employee-Tracker',
    description: 'sql, seeds, schema, server.js, database queries',
    imageUrl: 'https://github.com/BrielleBroadt/Witty-Web-Wizard/assets/135186013/7f0a196f-a839-4902-b7d7-8c728be2d061',
    repoLink: 'https://github.com/BrielleBroadt/Employee-Tracker',
  },
  {
    id: 1,
    title: 'Weather Dashboard',
    description: 'API calls, CSS, HTML',
    imageUrl: 'https://github.com/BrielleBroadt/Weather-Dashboard/assets/135186013/d4e46c52-dfc0-4928-8064-065fd0fb6bc2',
    repoLink: 'https://github.com/BrielleBroadt/Weather-Dashboard',
  },
  {
    id: 1,
    title: 'Text Editor',
    description: 'Mongoose, Schema, Model, routes, date format',
    repoLink: 'https://github.com/BrielleBroadt/Social-Network-API',
  },
  {
    id: 1,
    title: 'Final Project',
    description: 'Vite, React, Mutations, Graph QL',
    imageUrl: 'https://github.com/MalkaGreenberg/reel-delights/assets/135186013/9ff5bec5-8bc5-4c76-8fea-156509ca1725',
    repoLink: 'https://github.com/MalkaGreenberg/reel-delights',
  },
  
  // ... Add more project objects similarly
];
const Projects = () => {
  return (
    <div className="portfolio-grid">
    {projects.map((project) => (
      <div className="project-item" key={project.id}>
        <img src={project.imageUrl} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    ))}
  </div>
  )
}

export default Projects