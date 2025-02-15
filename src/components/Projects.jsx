import React from 'react'
import SectionHead from './SectionHead'
import Button from './Button'
import ProjectCards from './ProjectCards'

function Projects() {
  const ProjectData = [
    {
      title: "Sain Portfolio",
      src: "src/assets/images/sample1.png",
      alt: "This image contains sain Portfolio",
      paragragh: "Sain Porfolio is a sample Website project which is created with HTML, Tailwind CSS , CSS and Javacript",
      link: "https://lucky-banoffee-4e4a8c.netlify.app/"
    }
  ]


  return (
    <div id='projects' >
      <SectionHead title={"Projects"} Paragraph={"Here you will find some of the personal and clients projects that I created with each project containing its own case study"} />

      {ProjectData.map((items, index) => (
        <ProjectCards key={index} title={items.title} src={items.src} paragraph={items.paragragh} alt={items.alt} link={items.link} />
      ))}
    </div>
  )
}

export default Projects
