import React, { useState } from 'react'

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("")
  console.log(selectedLanguage);
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const languageOptions = [
    { value: 'en', label: 'En' },
    { value: 'fr', label: 'Fr' },
    { value: 'es', label: 'Es' },
    { value: 'de', label: 'De' },
    { value: 'da', label: 'Da' },
    // Add more language options as needed
  ];

  return (
    <select value={selectedLanguage} onChange={handleLanguageChange}>
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default LanguageDropdown