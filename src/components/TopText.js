import React, { useContext } from 'react';
import './TopText.css';
import HackEffect from './HackEffect';
import { LanguageContext } from '../contexts/LanguageContext';

const messages = {
  en: "My name is Alexandre Machado Melo, I am 22 years old and I study Electrical Engineering at the Federal University of Uberlândia. I work with the development of apps, systems, and websites, acting as a Full-Stack developer. I have a solid foundation in both Front-end and Back-end and have worked with several languages, including JavaScript (ES6), PHP, Node.js, C++, Java, and Python. I have experience with React, Vue, Angular, Git, Laravel, Django, VHDL, Letter, HTML, and CSS. I am always eager to enter new projects and expand my portfolio. See my journey:",
  pt: "Meu nome é Alexandre Machado Melo, tenho 22 anos e estudo Engenharia Elétrica na Universidade Federal de Uberlândia. Trabalho com desenvolvimento de aplicativos, sistemas e sites, atuando como desenvolvedor Full-Stack. Tenho uma base sólida tanto em Front-end quanto em Back-end e já trabalhei com várias linguagens, incluindo JavaScript (ES6), PHP, Node.js, C++, Java e Python. Tenho experiência com React, Vue, Angular, Git, Laravel, Django, VHDL, Letter, HTML e CSS. Estou sempre ansioso para entrar em novos projetos e expandir meu portfólio. Veja minha jornada:"
};

const TopText = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="top-text">
      <HackEffect message={messages[language]} />
    </div>
  );
};

export default TopText;
