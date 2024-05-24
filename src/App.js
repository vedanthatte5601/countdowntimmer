// src/App.js
import React, { useState } from 'react';
import CountdownInput from './components/CountdownInput';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

const App = () => {
  const [targetDate, setTargetDate] = useState(null);

  const handleSetTargetDate = (date) => {
    setTargetDate(date);
  };

  const handleCancel = () => {
    setTargetDate(null);
  };

  return (
    <div className="App">
      {!targetDate ? (
        <CountdownInput onSetTargetDate={handleSetTargetDate} />
      ) : (
        <CountdownTimer targetDate={targetDate} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default App;
