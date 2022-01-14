import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <BrowserRouter>
      <div className="body">
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
