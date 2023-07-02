import React, { useState } from 'react';
import "../css/Button.css"
import "../css/Dropdown.css"

const LanguageDropdown = ({title, selectedLanguage, setSelectedLanguage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const languageOptions = [
    { value: 'en', label: 'En', fullName: 'English' },
    { value: 'da', label: 'Da', fullName: 'Danish' },
    { value: 'fr', label: 'Fr', fullName: 'French' },
    { value: 'es', label: 'Es', fullName: 'Spanish' },
    { value: 'de', label: 'De', fullName: 'German' },
    { value: 'it', label: 'It', fullName: 'Italian' },
    { value: 'pt', label: 'Pt', fullName: 'Portuguese' },
    { value: 'nl', label: 'Nl', fullName: 'Dutch' },
    { value: 'sv', label: 'Sv', fullName: 'Swedish' },
    { value: 'no', label: 'No', fullName: 'Norwegian' },
    { value: 'fi', label: 'Fi', fullName: 'Finnish' },
    { value: 'hu', label: 'Hu', fullName: 'Hungarian' },
    { value: 'pl', label: 'Pl', fullName: 'Polish' },
    { value: 'cs', label: 'Cs', fullName: 'Czech' },
    { value: 'ro', label: 'Ro', fullName: 'Romanian' },
    { value: 'tr', label: 'Tr', fullName: 'Turkish' },
    { value: 'ru', label: 'Ru', fullName: 'Russian' },
    { value: 'ja', label: 'Ja', fullName: 'Japanese' },
    { value: 'ko', label: 'Ko', fullName: 'Korean' },
    { value: 'zh', label: 'Zh', fullName: 'Chinese' }
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
      <button 
      className="dropdown-button button-4" 
      role="button" 
      onClick={toggleDropdown}
      title={title}>
        {selectedLanguage ? selectedLanguage.label : 'A/诶'}
      </button>
      {isOpen && (
        <div className="dropdown-panel">
          <div className="dropdown-panel-title">{title}</div>
          {languageOptions.map((option) => (
            <div
              key={option.value}
              className="dropdown-item button-4"
              onClick={() => handleLanguageChange(option)}
              title={option.fullName}
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