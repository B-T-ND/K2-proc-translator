import React from 'react'
import LanguageDropdown from './LanguageDropdown'
import "../css/SearchBar.css"

const SearchBar = () => {
  return (
    <div>
      <input className='searchbar' type='text' placeholder='Search...'></input>
      <LanguageDropdown/>
      <button className='button-4' role="button">Go</button>
    </div>
  )
}

export default SearchBar