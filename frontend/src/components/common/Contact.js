import React from 'react';
import {Link} from 'react-router-dom';

const ContactCTA = () => {
  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Contact Me</h2>
      <p>Have a question or want to work together?</p>
      <Link to="/contact" className="button">Get in Touch</Link>
    </div>
  );
};

export default ContactCTA;
