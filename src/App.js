import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="body">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
