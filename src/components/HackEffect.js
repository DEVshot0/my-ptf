import React, { useEffect, useState, useContext } from 'react';
import './HackEffect.css';
import { NightModeContext } from '../contexts/NightModeContext';

const HackEffect = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const { isNightMode } = useContext(NightModeContext);

  useEffect(() => {
    let currentIndex = 0;
    let correctTimeout;

    const type = () => {
      if (currentIndex < message.length) {
        setDisplayedText(message.slice(0, currentIndex + 1));
        currentIndex += 1;
        correctTimeout = setTimeout(type, 10);
      }
    };

    type();

    return () => clearTimeout(correctTimeout);
  }, [message]);

  return (
    <div className={`hack-text ${isNightMode ? 'night-mode' : ''}`}>
      {displayedText}
      {displayedText.length === message.length && (
        <span className={`blinking-cursor ${isNightMode ? 'night-mode' : ''}`}>|</span>
      )}
    </div>
  );
};

export default HackEffect;
