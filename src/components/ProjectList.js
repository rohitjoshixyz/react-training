import React from 'react'
import projectList from '../projectList'
import ProjectCard from './ProjectCard'
const ProjectList = () => {
  return (
    <div>
      {projectList.map((project) => <ProjectCard project={project}/>)}
    </div>
  );
  
}

export default ProjectList