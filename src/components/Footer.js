import React, { useContext } from 'react';
import './Footer.css';
import HackEffect from './HackEffect';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'; 
import { NightModeContext } from '../contexts/NightModeContext';

const Footer = () => {
  const { isNightMode } = useContext(NightModeContext);

  return (
    <div className={`footer-container ${isNightMode ? 'night-mode' : ''}`} id="contacts">
      <div className="footer-item">
        <FaEnvelope className="footer-icon" />
        <HackEffect message="E-mail: " />
        <a
          href="mailto:alexandremachadomelo@hotmail.com"
          className="footer-link"
        >
          <HackEffect message="alexandremachadomelo@hotmail.com" />
        </a>
      </div>
      <div className="footer-item">
        <FaLinkedin className="footer-icon" />
        <HackEffect message="LinkedIn: " />
        <a
          href="https://www.linkedin.com/in/alexandre-machado-melo-2707b9200/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <HackEffect message="https://www.linkedin.com/in/alexandre-machado-melo-2707b9200/" />
        </a>
      </div>
      <div className="footer-item">
        <FaWhatsapp className="footer-icon" />
        <HackEffect message="WhatsApp: " />
        <a
          href="https://wa.me/5564992695013"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <HackEffect message="+55 (64) 99269-5013" />
        </a>
      </div>
      <div className="footer-item">
        <FaMapMarkerAlt className="footer-icon" />
        <HackEffect message="Localização: Uberlândia-MG" />
      </div>
    </div>
  );
};

export default Footer;
