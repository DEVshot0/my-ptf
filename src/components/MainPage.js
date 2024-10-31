import React, { useEffect, useContext } from 'react';
import './MainPage.css';
import LineAndBall from './LineAndBall'; 
import TopText from './TopText';
import PowerMeter from './PowerMeter';
import Header from './Header';
import GitHubLink from './GitHubLink';
import Footer from './Footer';
import { NightModeContext } from '../contexts/NightModeContext';

const MainPage = () => {
  const { isNightMode } = useContext(NightModeContext);

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`main-page ${isNightMode ? 'night-mode' : ''}`}>
      <Header scrollToSection={scrollToSection} />
      <div id="about">
        <TopText />
      </div>
      <div className="line-and-ball-container">
        <LineAndBall />
      </div>
      <div >
        <PowerMeter />
      </div>
      <div id="projects">
        <GitHubLink />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
