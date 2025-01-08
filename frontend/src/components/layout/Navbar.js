import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    // Function to close the navbar collapse after a link is clicked
    const handleNavLinkClick = () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show'); // Close the collapsible menu
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
                {/* Brand */}
                <Link to="/" className="navbar-brand">
                    MyPortfolio
                </Link>

                {/* Toggler Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>
                                <i className="fas fa-user"></i> About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" onClick={handleNavLinkClick}>
                                <i className="fas fa-project-diagram"></i> Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://github.com/mrmrjing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link"
                                onClick={handleNavLinkClick}
                            >
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
