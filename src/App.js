import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import LanguageSelection from './components/LanguageSelection';
import { NightModeProvider } from './contexts/NightModeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <NightModeProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<LanguageSelection />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </NightModeProvider>
  );
}

export default App;
