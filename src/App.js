import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap"
import './App.css';
import Error from './Components/Error';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Policy from './Components/Pages/Policy';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>

    
    
  );
}

export default App;
