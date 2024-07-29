import React, { useContext, useState } from 'react';
import './Header.css';
import HackEffect from './HackEffect';
import { NightModeContext } from '../contexts/NightModeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const messages = {
  en: {
    name: "Alexandre M. M.",
    about: "About Me",
    projects: "Projects",
    cv: "CV",
    contacts: "Contacts",
  },
  pt: {
    name: "Alexandre M. M.",
    about: "Quem sou eu?",
    projects: "Projetos",
    cv: "CV",
    contacts: "Contatos",
  }
};

const Header = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isNightMode, toggleNightMode } = useContext(NightModeContext);
  const { language } = useContext(LanguageContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCVClick = () => {
    const cvFile = language === 'pt' ? 'CVPT.pdf' : 'CVEN.pdf';
    window.open(`${process.env.PUBLIC_URL}/${cvFile}`, '_blank');
  };

  return (
    <div className={`header-container ${isNightMode ? 'night-mode' : ''}`}>
      <div className="header-content">
        <div className="header-left">
          <HackEffect message={messages[language].name} />
        </div>
        <div className="header-center">
          <button className="header-button" onClick={toggleNightMode}>
            {isNightMode ? 'Light Mode' : 'Night Mode'}
          </button>
        </div>
        <div className="header-right">
          <button className="header-button" onClick={() => scrollToSection('about')}>
            <HackEffect message={messages[language].about} />
          </button>
          <button className="header-button" onClick={() => scrollToSection('projects')}>
            <HackEffect message={messages[language].projects} />
          </button>
          <button className="header-button" onClick={handleCVClick}>
            <HackEffect message={messages[language].cv} />
          </button>
          <button className="header-button" onClick={() => scrollToSection('contacts')}>
            <HackEffect message={messages[language].contacts} />
          </button>
        </div>
        <div className="menu-hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={`menu-dropdown ${menuOpen ? 'show' : ''}`}>
        <button className="header-button" onClick={() => { toggleMenu(); scrollToSection('about'); }}>
          <HackEffect message={messages[language].about} />
        </button>
        <button className="header-button" onClick={() => { toggleMenu(); scrollToSection('projects'); }}>
          <HackEffect message={messages[language].projects} />
        </button>
        <button className="header-button" onClick={() => { toggleMenu(); handleCVClick(); }}>
          <HackEffect message={messages[language].cv} />
        </button>
        <button className="header-button" onClick={() => { toggleMenu(); scrollToSection('contacts'); }}>
          <HackEffect message={messages[language].contacts} />
        </button>
      </div>
    </div>
  );
};

export default Header;
