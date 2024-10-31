import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import brazilFlag from '../assets/brazil.png';
import ukFlag from '../assets/uk.png';
import { LanguageContext } from '../contexts/LanguageContext';
import { NightModeContext } from '../contexts/NightModeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import './LanguageSelection.css';

const LanguageSelection = () => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const { changeLanguage } = useContext(LanguageContext);
  const { isNightMode, toggleNightMode } = useContext(NightModeContext);
  const navigate = useNavigate();

  const message = "Please select your language:";

  useEffect(() => {
    let charIndex = 0;
    let timeoutId;
    const typeMessage = () => {
      if (charIndex < message.length) {
        setDisplayedMessage(message.substring(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(typeMessage, 100);
      } else {
        timeoutId = setTimeout(() => {
          setShowButtons(true);
        }, 500);
      }
    };

    typeMessage();

    return () => clearTimeout(timeoutId);
  }, [message]);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    navigate('/main');
  };

  return (
    <div className={`language-selection ${isNightMode ? 'night-mode' : ''}`}>
      <p>{displayedMessage}<span className="blinking-cursor">|</span></p>
      {showButtons && (
        <div className="button-container">
          <div className="flags-container">
            <img
              src={brazilFlag}
              alt="Brazilian Flag"
              className="flag"
              onClick={() => handleLanguageChange('pt')}
            />
            <img
              src={ukFlag}
              alt="UK Flag"
              className="flag"
              onClick={() => handleLanguageChange('en')}
            />
          </div>
          <button className="toggle-mode-button" onClick={toggleNightMode}>
            {isNightMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelection;
