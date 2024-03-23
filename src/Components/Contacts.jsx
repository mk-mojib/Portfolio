import React, { useState } from 'react';
import "./Contacts.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleEmailClick = () => {
    if (!formData.name || !formData.email) {
      window.alert('Please fill in both name and email.');
      return;
    }

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${formData.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className='last-section'>
      <h2>Contact <b>Me</b></h2>
      <p>Feel free to reach out!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
        ></textarea>

        <button type="button" onClick={handleEmailClick}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;