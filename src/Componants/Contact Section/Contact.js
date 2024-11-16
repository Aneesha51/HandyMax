import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    date: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.number || !formData.date) {
      setMessage('Please fill in all fields.');
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch('http://localhost/React System developmet/handymax/Server/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setMessage(result.message || 'Appointment successfully created!');
      setFormData({ name: '', email: '', number: '', date: '' });
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while submitting the form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='contact' id='contact'>
    <h1 className="heading">make appointment</h1>

    <form onSubmit={handleSubmit}>
      {message && (
        <p className={message.includes('successfully') ? 'success-message' : 'error-message'}>
          {message}
        </p>
      )}
      <label>
        Your Name:
        <input type="text" name="name" onChange={handleChange} className='box' required />
      </label>
      <label>
        Your Email:
        <input type="email" name="email" onChange={handleChange} className='box' required />
      </label>
      <label>
        Your Number:
        <input type="text" name="number" onChange={handleChange} className='box' required />
      </label>
      <label>
        Appointment Date:
        <input type="datetime-local" name="date" onChange={handleChange} className='box' required />
      </label>
      <button type="submit" className='link-btn'>Make Appointment</button>
    </form>
  </section>
);
};

export default Contact;
