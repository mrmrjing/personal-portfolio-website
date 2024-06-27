import React, { useState } from 'react';
import '../../assets/styles/ContactPage.css';  


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here
    console.log('Form Data:', formData);  // You might replace this with your actual submission logic
    alert('Message sent!');  // Placeholder feedback
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to work together, feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
