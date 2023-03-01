import { useState } from 'react'
import About from './pages/Homepage/About'
import Contact from './pages/Homepage/Contact'
import Fonctionnement from './pages/Homepage/Fonctionnement'
import Hero from './pages/Homepage/Hero'
import Partners from './pages/Homepage/Partners'
import Philosophie from './pages/Homepage/Philosophie'
import Services from './pages/Homepage/Services'
import SubHero from './pages/Homepage/SubHero'
import Footer from './template/Footer'
import Header from './template/header'

function App() {


  return (
    <>
      <Header />
      <main className="App">
        <Hero />
        <SubHero />
        <Services />
        <Fonctionnement />
        <Philosophie />
        <About />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
