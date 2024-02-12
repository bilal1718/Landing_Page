import React, { useState, useEffect } from 'react';
import "../countdown.css"; // Make sure to import your countdown styles

const CountdownSection = () => {
  // Set your countdown end date and time
  const countdownDate = new Date('2024-12-31T00:00:00').getTime();

  // Calculate the remaining time
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-wrap">
        <h2>Countdown</h2>
        <div className="countdown">
          {/* Display your countdown here using timeLeft */}
          <div className="time-unit">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="time-unit">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="time-unit">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="time-unit">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
        <button className="countdown-button">Click Me</button>
      </div>
    </section>
  );
};

export default CountdownSection;
