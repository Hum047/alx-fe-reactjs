import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message from ${formData.name}: ${formData.message}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#333' }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ margin: '10px', padding: '8px', width: '200px' }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <textarea
          style={{ margin: '10px', padding: '8px', width: '300px', height: '100px' }}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px' }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
