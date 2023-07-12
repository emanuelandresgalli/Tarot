import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import Nav from './core/Nav'
import Footer from './core/Footer'
import Gallery from './components/Gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
     <Home/>
     <Gallery/>
     <Footer/>
    </>
  )
}

export default App
