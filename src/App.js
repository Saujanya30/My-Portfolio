import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/JS/Navbar'
import Home from './components/JS/Home'
import Project from './components/JS/Project';
import About from './components/JS/About';

function App() {
  return (
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Project" element={<Project/>} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
