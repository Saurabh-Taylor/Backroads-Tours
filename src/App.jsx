import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Tours from './components/Tours'
import Services from './components/Services'


function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Services/>
  <Tours/>
  <Footer/>

  </>
  )
}

export default App
