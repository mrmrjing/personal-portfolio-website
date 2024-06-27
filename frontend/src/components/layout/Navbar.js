import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';  

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-item">
                <i className="fas fa-home"></i> About Me
            </Link>
            <Link to="/projects" className="nav-item">
                <i className="fas fa-project-diagram"></i> Projects
            </Link>
            <Link to="/contact" className="nav-item">
                <i className="fas fa-envelope"></i> Contact
            </Link>
            <a href="https://github.com/mrmrjing" target="_blank" rel="noopener noreferrer" className="nav-item">
                <i className="fab fa-github"></i> GitHub
            </a>
        </nav>
    );
};

export default Navbar;
