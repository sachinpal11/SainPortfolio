import React from 'react'
import Button from './Button'

function ProjectCards({ title, src, paragraph, alt, link }) {
  return (
    <div>
      <section className="container w-[80%] mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <img
            src={src}
            alt={alt}

            className="w-full h-auto"

          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl text-sky-600 font-bold tracking-tight">{title}</h2>

          <p className="text-muted-foreground text-neutral-600 text-lg">
            {paragraph}
          </p>

          <Button link={link} >
            Live Preview
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ProjectCards
