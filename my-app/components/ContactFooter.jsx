import React, { useState } from 'react';

import emailImage from '../assets/email.png';
import  mobileImage from '../assets/mobile.png';

import { motion } from 'framer-motion';

const ContactFooter = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState('')


 

  const handleSubmit = async () => {
    setLoading(true);

    const contact = {
      // _type: 'contact',
      name: username,
      email: email,
      message: message,
    };
    if (contact.name && contact.email && contact.message) {
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        })
  
        const { error } = await res.json()
  
        if (error) {
          setForm({
            state: 'error',
            message: error,
          })
          return
        }
        setLoading(false);
        setIsFormSubmitted(true);
        setUsername('')
        setEmail('')
        setMessage('')
       
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        })
      }
    }


   
  };

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className=" app__footer app__flex "
    >
    <div className="app__wrapper app__flex">

      <h2 className="head-text">Contact us for more discount and info</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          {/* <img src={`${emailImage}`} alt="email" /> */}
          <a href="mailto:giftint8@gmail.com" className="p-text">giftint8@gmail.com</a>
        </div>
        <div className="app__footer-card">
          {/* <img src={mobileImage} alt="phone" /> */}
          <a href="tel:+234 8035 5348 53" className="p-text">+234 8035 5348 53</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input required className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="app__flex">
            <input required className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      </div>
    </motion.div>
  );
};

export default ContactFooter