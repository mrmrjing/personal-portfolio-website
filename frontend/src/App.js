import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import StarsBackground from './components/common/StarsBackground';
import Navbar from './components/layout/Navbar';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/layout/Footer';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import projectsData from './components/pages/ProjectsData';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
      <Router basename="/personal-portfolio-website">
          <div className="App">
              <StarsBackground />
              <Navbar />
              <div className="content">
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/projects" element={<ProjectsPage />} />
                      <Route path="/projects/:projectId" element={<ProjectDetailPage projectsData={projectsData} />} />
                      <Route path='/about' element={<AboutPage />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
