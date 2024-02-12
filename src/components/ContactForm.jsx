import React, { useState, useEffect } from 'react';
import '../ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={`form-container ${isVisible ? 'visible' : ''}`}>
      <div className="form-content">
        <h4>FLAT 30% OFF</h4>
        <p>Enter your details and win a coupon worth 15% Off</p>
        <div className="close-icon" onClick={handleClose}>
          <i className='fa fa-times' />
        </div>
        <form>
          <input type="tel" placeholder='Enter your phone' id="phoneNumber" name="phoneNumber" required />
          <input type="email"  placeholder='Enter your email' id="email" name="email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
