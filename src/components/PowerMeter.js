import React, { useState, useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import './PowerMeter.css';
import { NightModeContext } from '../contexts/NightModeContext';

const PowerMeter = ({ title, level }) => {
  const maxLevel = 6; 
  const [currentLevel, setCurrentLevel] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const { isNightMode } = useContext(NightModeContext);

  useEffect(() => {
    let interval;
    if (inView && currentLevel < level) {
      interval = setInterval(() => {
        setCurrentLevel((prev) => prev + 1);
      }, 250);
    }
    return () => clearInterval(interval);
  }, [inView, currentLevel, level]);

  return (
    <div className={`power-meter ${isNightMode ? 'night-mode' : ''}`} ref={ref}>
      <h3>{title}</h3>
      <div className="meter">
        {[...Array(maxLevel)].map((_, i) => (
          <div
            key={i}
            className={`square ${i < currentLevel ? 'filled' : ''} ${i === level - 1 && currentLevel === level ? 'blinking' : ''} ${isNightMode ? 'night-mode' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const PowerMeterList = () => {
  const meters = [
    { title: 'HTML', level: 6 },
    { title: 'CSS', level: 6 },
    { title: 'JS(ES6)', level: 6 },
    { title: 'PHP', level: 5 },
    { title: 'PYTHON', level: 4 },
    { title: 'NODE', level: 4 },
    { title: 'C++', level: 4 },
    { title: 'JAVA', level: 4 } 
  ];

  return (
    <div className="power-meter-list">
      {meters.map((meter, index) => (
        <PowerMeter key={index} title={meter.title} level={meter.level} />
      ))}
    </div>
  );
};

export default PowerMeterList;
