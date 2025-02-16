import React from 'react'
import SectionHead from './SectionHead'
import Button from './Button'
import ProjectCards from './ProjectCards'
import Sample1 from '../assets/images/Sample1.webp'
import Sample2 from '../assets/images/sample2.webp'
function Projects() {
  const ProjectData = [
    {
      title: "Sain Portfolio",
      src: Sample1,
      alt: "This image contains sain Portfolio",
      paragragh: "Sain Porfolio is a sample Website project which is created with HTML, Tailwind CSS , CSS and Javacript.",
      link: "https://lucky-banoffee-4e4a8c.netlify.app/"
    },
    {
      title: "DP Sports World",
      src: Sample2,
      alt: "This image contains Dp Sports World",
      paragragh: "DP Sports World is a sports academy sample Website project which is created with HTML, Tailwind CSS , CSS and Javacript.",
      link: "https://dp-sports-world.netlify.app/"
    },
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
