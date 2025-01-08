import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProjects = ({ projects }) => {
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Featured Projects</h2>
            <div className="row">
                {featuredProjects.map(project => (
                    <div key={project.id} className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="card h-100">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="card-img-top" 
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <Link to={`/projects/${project.id}`} className="btn btn-primary">
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

export default FeaturedProjects;
