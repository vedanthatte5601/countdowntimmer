// src/CountdownTimer.js
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate, onCancel }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(timeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div>Time's up!</div>;
  }

  return (
    <div>
      <div>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default CountdownTimer;
