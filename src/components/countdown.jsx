import React, { useState, useEffect } from 'react';
import "../countdown.css";

const CountdownSection = () => {
  const initialTime = 10 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(countdownInterval);
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="countdown-container">
      <h2>Time is Running Out <br /> Sign Up Now!</h2>
      <ul id="countdown">
        <li id="minutes">
          <div className="number">{String(minutes).padStart(2, '0')}</div>
          <div className="label">Minutes</div>
        </li>
        <li id="colon">:</li>
        <li id="seconds">
          <div className="number">{String(seconds).padStart(2, '0')}</div>
          <div className="label">Seconds</div>
        </li>
      </ul>
      <button className='Register'>Register Now at &#x20B9;499</button>
    </div>
  );
};

export default CountdownSection;
