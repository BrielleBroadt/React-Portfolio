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
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'URL_TO_IMAGE_1',
    repoLink: 'URL_TO_REPO_1',
  },
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'URL_TO_IMAGE_1',
    repoLink: 'URL_TO_REPO_1',
  },
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'URL_TO_IMAGE_1',
    repoLink: 'URL_TO_REPO_1',
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