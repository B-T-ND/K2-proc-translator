import React, { useState } from 'react'
import LanguageDropdown from './LanguageDropdown'
import "../css/SearchBar.css"
import Answer from './Answer'

const SearchBar = () => {
  const [translateFrom, setTranslateFrom] = useState("")
  const [translateTo, setTranslateTo] = useState("")
  const handleGoButtonPress = () => {

  }

  return (
    <div className='searchbar-container'>
      <input className='searchbar' type='text' placeholder='Search...'></input>
      <LanguageDropdown title={"Translate from:"} selectedLanguage={translateFrom} setSelectedLanguage={setTranslateFrom} />
      <LanguageDropdown title={"Translate to:"} selectedLanguage={translateTo} setSelectedLanguage={setTranslateTo} />
      <button className='button-4' role="button" onClick={handleGoButtonPress}>Go</button>
      <Answer />
    </div>
  )
}

export default SearchBar