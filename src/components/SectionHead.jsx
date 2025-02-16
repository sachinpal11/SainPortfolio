import React from 'react'

function SectionHead({ title, Paragraph }) {
  return (
    <div>
      <div className="space-y-4 text-neutral-600 text-center mb-16">
        <h1 className="text-4xl text-sky-700 font-bold tracking-tight">{title}</h1>
        <div className="w-16 h-1 bg-sky-700 mx-auto" />
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {Paragraph}
        </p>
      </div>
    </div>
  )
}

export default SectionHead
