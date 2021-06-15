import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name)
  const techs = technologies.map((element) => {
    return <span key={element}>{element}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techs}
      </div>
    </div>
  );
}

export default ProjectItem;
