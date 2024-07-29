import React from 'react'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

// pages directory
import Header from './pages/Header';
import Banner from './pages/Banner';
import Experts from './pages/Experts';
import Aboutus from './pages/Aboutus';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './pages/Skills';
import Plans from './pages/Plans';
import Contact1 from './pages/Contact1';
import Footer from './pages/Footer';


function App() {
  return (
    <div>
      <Header/>
      {/*
      <Banner/>
      <Experts/>
      <Aboutus/>
      <Skills/>
      <Plans/>
      <Contact1/>
      <Footer/> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resources' element={<Resources/>}/>
      
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
         </Routes>
      
    </div>
  )
}

export default App
