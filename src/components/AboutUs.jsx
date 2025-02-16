import { Link } from "react-router"
import Button from "./Button"
import SectionHead from "./SectionHead"


export default function AboutMe() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "GSAP",
    "Tailwind",
    "GIT",
    "Github",
    "Responsive Design",
    "SEO",
    ,
  ]

  return (
    <section id="about" className="container text-neutral-700 mx-auto px-4 py-16 max-w-6xl">

      <SectionHead title={"About Me"} Paragraph={"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"} />

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl text-sky-700 font-bold">Get to know me!</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a <span className="text-foreground">Frontend Focused Web Developer</span> building and managing
              the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out
              some of my work in the <span className="text-foreground">Projects</span> section.
            </p>

          </div>
          <Button>Contact</Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl text-sky-700 font-bold">My Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <li key={index} className="px-4 py-2 list-none bg-neutral-200 rounded-md text-sm font-medium">
                {skill}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

