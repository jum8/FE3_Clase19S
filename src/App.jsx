import './App.css'
import React, { useState, useMemo } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
		if(language === languages.english) setLanguage(languages.spanish)
		if(language === languages.spanish) setLanguage(languages.english)
  }

	const providerValue = useMemo(() => (
		{ language, handleChangeLA }
		), [language, handleChangeLA]);

  return (
    <div className="App">
      <LanguageContext.Provider value={providerValue}>
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  )
}

export default App