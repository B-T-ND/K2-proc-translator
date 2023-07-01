import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const languageOptions = [
    { value: 'en', label: 'En' },
    { value: 'fr', label: 'Fr' },
    { value: 'es', label: 'Es' },
    { value: 'de', label: 'De' },
    { value: 'da', label: 'Da' },
    // Add more language options as needed
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedLanguage ? selectedLanguage.label : 'Select a language'}
      </button>
      {isOpen && (
        <div className="dropdown-panel">
          {languageOptions.map((option) => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleLanguageChange(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;