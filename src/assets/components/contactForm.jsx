import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.ok) {
        setStatus('✅ Message sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('❌ Send failed. Try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('⚠️ Something went wrong.');
    }
  };

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      onSubmit={handleSubmit} 
      className="space-y-4"
    >
      {/* Hidden field for Netlify form detection */}
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="grid grid-cols-2 gap-[50px]">
        <div className="flex flex-col leading-[2]">
          <label htmlFor="name" className="mb-1">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
            className="input"
          />
        </div>
        <div className="flex flex-col leading-[2]">
          <label htmlFor="email" className="mb-1">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="input"
          />
        </div>
      </div>

      <div className="flex flex-col leading-[2]">
        <label htmlFor="message" className="mb-1">Message:</label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Your message..."
          rows="5"
          className="input"
        />
      </div>

      <button
        type="submit"
        className="w-[25%] item-center button mt-4 mx-auto"
        style={{ margin: '0 auto' }}
      >
        Send
      </button>

      {status && (
        <p className="mt-4 text-center font-semibold text-sm text-blue-500">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;