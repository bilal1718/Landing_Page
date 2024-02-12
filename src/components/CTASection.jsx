import React from 'react';
import "../CTA.css"

const CTASection = () => {
  const generateRandomText = () => {
    const randomTexts = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    ];

    return randomTexts.map((text, index) => (
      <li key={index}>{text}</li>
    ));
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-left">
          <h1>Discover Our <br /> Amazing Features</h1>
          <ul className='textPoints'>{generateRandomText()}</ul>
        </div>
        <div className="cta-right">
          <div className="big-price">&#x20B9;499</div>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
