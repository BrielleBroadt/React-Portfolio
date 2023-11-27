import React from 'react'
import './projects.css'
const projects = [
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