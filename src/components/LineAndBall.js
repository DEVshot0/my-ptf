import React, { useEffect, useState, useContext } from 'react';
import './LineAndBall.css';
import HackEffect from './HackEffect';
import { NightModeContext } from '../contexts/NightModeContext';
import { LanguageContext } from '../contexts/LanguageContext';

import imagem0 from '../assets/imagem0.webp';
import imagem1 from '../assets/imagem1.webp';
import imagem2 from '../assets/imagem2.webp';
import imagem3 from '../assets/imagem3.webp';
import imagem4 from '../assets/imagem4.webp';
import imagem5 from '../assets/imagem5.webp';
import imagem6 from '../assets/imagem6.webp';
import imagem7 from '../assets/imagem7.webp';
import imagem8 from '../assets/imagem8.webp';

const LineAndBall = () => {
  const { isNightMode } = useContext(NightModeContext);
  const { language } = useContext(LanguageContext);
  const [lineHeight, setLineHeight] = useState(0);
  const [maxLineHeightReached, setMaxLineHeightReached] = useState(0);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const maxLineHeight = 2401;
      const initialHeight = window.innerHeight * 0.01;
      const scrollPosition = window.scrollY;
      const newHeight = initialHeight + scrollPosition;

      if (newHeight >= maxLineHeight) {
        setLineHeight(maxLineHeight);
        setMaxLineHeightReached(maxLineHeight);
      } else if (newHeight > maxLineHeightReached) {
        setLineHeight(newHeight);
        setMaxLineHeightReached(newHeight);
      } else {
        setLineHeight(maxLineHeightReached);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxLineHeightReached]);

  useEffect(() => {
    const height = window.innerHeight;
    const newPositions = [];
    const initialPosition = height * 0.01;
    const spacing = 300;
    const numBalls = 9;

    for (let i = 0; i < numBalls; i++) {
      const topPosition = initialPosition + spacing * i;
      newPositions.push(topPosition);
    }
    setPositions(newPositions);
  }, []);

  const messages = {
    en: [
      "A DEV is born!!",
      "I started my journey in programming by developing mods for Minecraft, which sparked my passion for the field.",
      "I joined the Information Systems course but had to stop due to the pandemic. Although I faced challenges with remote learning, I continued to expand my programming skills.",
      "I worked as an IT technician, with responsibilities including maintaining Linux servers, networks, and other systems.",
      "I developed an interest in front-end programming and started deepening my knowledge in HTML, CSS, and JavaScript.",
      "I completed Object-Oriented Programming (OOP) courses 1 and 2 at the Federal Institute of Goiás, focusing on Java and C++.",
      "I got my first job in the programming field, where I worked remotely developing websites using PHP and Laravel.",
      "I started working on producing applications using JavaScript, Java, and Node.",
      "You found me here!",
    ],
    pt: [
      "Um DEV nasceu!!",
      "Comecei minha jornada na programação desenvolvendo mods para Minecraft, o que despertou minha paixão pela área.",
      "Entrei no curso de Sistemas de Informação, mas tive que parar devido à pandemia. Apesar dos desafios com o ensino remoto, continuei a expandir minhas habilidades em programação.",
      "Trabalhei como técnico de TI, com responsabilidades que incluíam a manutenção de servidores Linux, redes e outros sistemas.",
      "Desenvolvi um interesse pela programação front-end e comecei a aprofundar meus conhecimentos em HTML, CSS e JavaScript.",
      "Completei os cursos de Programação Orientada a Objetos (POO) 1 e 2 no Instituto Federal de Goiás, focando em Java e C++.",
      "Consegui meu primeiro emprego na área de programação, onde trabalhei remotamente desenvolvendo sites usando PHP e Laravel.",
      "Comecei a trabalhar na produção de aplicativos usando JavaScript, Java e Node.",
      "Você me encontrou aqui!",
    ]
  };

  const years = {
    en: ["2002", "2019", "2020", "2021", "2022", "2022", "2023", "2023", "2024"],
    pt: ["2002", "2019", "2020", "2021", "2022", "2022", "2023", "2023", "2024"]
  };

  const images = [
    imagem0,
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    imagem7,
    imagem8,
  ];

  return (
    <div className="container">
      <div className={`line ${isNightMode ? 'night-mode' : ''}`} style={{ height: `${lineHeight}px`, top: '0', position: 'absolute' }}></div>
      <div className="ball-container">
        {positions.map((top, i) => (
          <div className={`ball ${isNightMode ? 'night-mode' : ''}`} key={i} style={{ top: `${top}px` }}></div>
        ))}
        {positions.map((top, i) => (
          <div 
            className={`text ${i % 2 === 0 ? 'left' : 'right'} ${isNightMode ? 'night-mode' : ''}`} 
            key={i} 
            style={{ top: `${top}px`, display: lineHeight >= (i * 300 + 1) ? 'flex' : 'none' }}>
            {lineHeight >= (i * 300 + 1) && (
              <>
                {i % 2 === 0 ? (
                  <>
                    <img src={images[i]} alt={`icon-${i}`} className="icon-image left" />
                    <div>
                      <HackEffect message={messages[language][i]} />
                      <div className={`year ${isNightMode ? 'night-mode' : ''}`}>{years[language][i]}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <HackEffect message={messages[language][i]} />
                      <div className={`year ${isNightMode ? 'night-mode' : ''}`}>{years[language][i]}</div>
                    </div>
                    <img src={images[i]} alt={`icon-${i}`} className="icon-image right" />
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineAndBall;
