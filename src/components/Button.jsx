import React from 'react'

function Button({ children, link }) {
  return (
    <button className="mt-4 px-5 py-3 text-lg uppercase bg-sky-700 text-white font-semibold rounded"><a href={link} >{children}</a></button>
  )
}

export default Button
