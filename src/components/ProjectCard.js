import React from 'react'

const ProjectCard = (props) => {
  const {image_url, name, description} = props.project

  return (
    <div className="row-sm-6">
      <div className="col-sm-3">
        <img src={image_url} alt={name}></img>
      </div>
      <div className="col-sm-9">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard