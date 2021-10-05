import React from 'react'

const Project = ({id, name, url, skills, description, tech_skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            { skills && <h3>Skills: {skills.map(skill => skill)}</h3> }
            { tech_skills && <h3>Tech: {tech_skills.map(tech_skill => tech_skill)}</h3> }
            <p>{description}</p>
        </div>
    )
}

export default Project