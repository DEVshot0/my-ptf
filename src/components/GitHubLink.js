import React, { useContext } from 'react';
import './GitHubLink.css';
import HackEffect from './HackEffect';
import { NightModeContext } from '../contexts/NightModeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const messages = {
  en: {
    message: "Want to know more about my projects? Visit my GitHub!",
    buttonText: "Click here"
  },
  pt: {
    message: "Quer conhecer melhor meus projetos? Visite meu GitHub!",
    buttonText: "Clique aqui"
  }
};

const GitHubLink = () => {
  const { isNightMode } = useContext(NightModeContext);
  const { language } = useContext(LanguageContext);

  const { message, buttonText } = messages[language];

  return (
    <div className={`github-link-container ${isNightMode ? 'night-mode' : ''}`}>
      <HackEffect message={message} />
      <a href="https://github.com/DEVshot0" target="_blank" rel="noopener noreferrer">
        <button className={`github-button ${isNightMode ? 'night-mode' : ''}`}>{buttonText}</button>
      </a>
    </div>
  );
};

export default GitHubLink;
