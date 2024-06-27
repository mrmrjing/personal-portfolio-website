import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';
import StarsBackground from './components/common/StarsBackground';
import Navbar from './components/layout/Navbar';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/layout/Footer';
import './App.css';



function App() {
  return (
      <Router>
          <div className="App">
              <StarsBackground />  
              <Navbar />
              <div className="content"> 
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/projects" element={<ProjectsPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path='/about' element={<AboutPage />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
}

export default App;