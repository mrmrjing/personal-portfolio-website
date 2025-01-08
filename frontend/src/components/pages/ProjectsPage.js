import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsData from './ProjectsData';

const ProjectsPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Projects</h1>
            <div className="row">
                {projectsData.map((project) => (
                    <div key={project.id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm h-100">
                            {/* Project Image */}
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="card-img-top"
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            {/* Project Content */}
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <Link to={`/projects/${project.id}`} className="btn btn-primary mt-auto">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
