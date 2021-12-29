import React from 'react';
import './SearchBar.css';

export const SearchBar = ({handleUserInput, userInputValue}) => {

  return (
    <>
      <div className='SearchBar'>
        <label className='Label'>Search your recipes</label>
        <input className='Input' type="text" value={userInputValue} placeholder='enter recipe name here' onChange={(event) => handleUserInput(event)} />
      </div>
    </>
  );
}

export default SearchBar;