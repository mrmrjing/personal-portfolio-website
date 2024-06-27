import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';  

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Home Link */}
            <Link to="/" className="nav-item">
                <i className="fas fa-home"></i> Home  {/* Icon for Home */}
            </Link>
            {/* About Me Link */}
            <Link to="/about" className="nav-item">
                <i className="fas fa-user"></i> About Me
            </Link>
            {/* Projects Link */}
            <Link to="/projects" className="nav-item">
                <i className="fas fa-project-diagram"></i> Projects
            </Link>
            {/* Contact Link */}
            <Link to="/contact" className="nav-item">
                <i className="fas fa-envelope"></i> Contact
            </Link>
            {/* GitHub Link */}
            <a href="https://github.com/mrmrjing" target="_blank" rel="noopener noreferrer" className="nav-item">
                <i className="fab fa-github"></i> GitHub
            </a>
        </nav>
    );
};

export default Navbar;
