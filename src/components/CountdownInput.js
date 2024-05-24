// src/CountdownInput.js
import React, { useState } from 'react';

const CountdownInput = ({ onSetTargetDate }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetDateTime = new Date(`${date}T${time}`);
    onSetTargetDate(targetDateTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Target Date:</label>
        <input 
          type="date" 
          id="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          required 
        />
      </div>
      <div>
        <label htmlFor="time">Target Time:</label>
        <input 
          type="time" 
          id="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
          required 
        />
      </div>
      <button type="submit">Start Countdown</button>
    </form>
  );
};

export default CountdownInput;
