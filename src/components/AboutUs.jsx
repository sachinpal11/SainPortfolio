import { Link } from "react-router"
import Button from "./Button"
import SectionHead from "./SectionHead"


export default function AboutMe() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Wordpress",
    "PHP",
    "SASS",
    "GIT",
    "Github",
    "Responsive Design",
    "SEO",
    "Terminal",
  ]

  return (
    <section id="about" className="container text-neutral-700 mx-auto px-4 py-16 max-w-6xl">

      <SectionHead title={"About Me"} Paragraph={"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"} />

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl text-sky-600 font-bold">Get to know me!</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a <span className="text-foreground">Frontend Focused Web Developer</span> building and managing
              the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out
              some of my work in the <span className="text-foreground">Projects</span> section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have learned over the years in{" "}
              <span className="text-foreground">Web Development</span> so it can help other people of the Dev Community.
              Feel free to Connect or Follow me on my{" "}
              <Link href="#" className="text-sky-600 hover:text-sky-700 font-medium">
                Linkedin
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-sky-600 hover:text-sky-700 font-medium">
                Instagram
              </Link>{" "}
              where I post useful content related to Web Development and Programming
            </p>
          </div>
          <Button>Contact</Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl text-sky-600 font-bold">My Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li className="px-4 py-2 list-none bg-neutral-200 rounded-md text-sm font-medium">
                {skill}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

