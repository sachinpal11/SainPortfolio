import React from 'react'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutUs'
import Projects from '../components/Projects'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
