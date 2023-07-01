import React from 'react'
import LanguageDropdown from './LanguageDropdown'

const SearchBar = () => {
  return (
    <div>
      <input type='text' placeholder='Search...'></input>
      <LanguageDropdown/>
    </div>
  )
}

export default SearchBar