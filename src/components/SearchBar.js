import React, {useState, useEffect} from 'react';
import './SearchBar.css';

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className='SearchBar'>
      <label className='Label'>Search your recipes</label>
      <input className='Input' type="text" placeholder='enter recipe name here' />
    </div>
  );
}

export default SearchBar;