import React from 'react'
import Analyst from './components/Analyst'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import NewLetter from './components/NewLetter'


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Analyst/>
      <NewLetter/>
      <Cards/>
      <Footer/>
    </>
    
  )
}

export default App
