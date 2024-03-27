import React, { useState } from 'react';
import "./Contacts.css"
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


const Contact = () => {
  const iconStyle = {
    color: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity here (0.5 means 50% transparent)
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleEmailClick = () => {
    if (!formData.name || !formData.email || !formData.subject) {
      window.alert('Please fill in all fields.');
      return;
    }

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Message from ${formData.name}: ${formData.message}`);
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
      <div className="contact-container">
        <div className="contact">
          <div className="contact-title">
            <h2>Contact <b>Me</b></h2>
            <p>Contact Us</p>
            <h5>Feel free to reach out!</h5>
          </div>
            <div className="info">
              <div className="address">
                <div className="icon-container">
                    <FaMapMarkerAlt style={iconStyle} />
                  </div>
                  <div>
                    <h4>Location:</h4>
                    <p>Darbhanga, Bihar, India</p>
                  </div>
                </div>
                <div className="email">
                  <div className="icon-container">
                    <FaEnvelope style={iconStyle}/>
                  </div>
                  <div>
                    <h4>Email:</h4>
                    <p>mdkhalidmojib2001@gmail.com</p>
                  </div>
                </div>
                <div className="phone">
                  <div className="icon-container">
                    <FaPhone style={iconStyle}/>
                  </div>
                  <div>
                    <h4>Call:</h4>
                    <p>+91 9955888978</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="contact-info" >
              <div className="form-container">
                <form>
                  <div className="name-email">
                    <div className="your-name">
                      <label htmlFor="name"></label>
                      <input  placeholder='Your Name' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="your-email">
                      <label htmlFor="email"></label>
                      <input placeholder='Your Email' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="your-subject">
                    <label htmlFor="subject"></label>
                    <input placeholder='Subject' type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div className="your-message">
                  <label htmlFor="message"></label>
                    <textarea id="message"name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Write your message here..." required />
                  </div>
                  <button type="button" onClick={handleEmailClick}>
                    Send Message
                  </button>
                </form>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
