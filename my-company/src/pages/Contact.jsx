import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert(`Message from ${name} sent!`);
    setName('');
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Contact Page</h2>
      <input 
        type="text" 
        placeholder="Your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default Contact;
