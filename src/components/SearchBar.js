import React, {useState, useEffect} from 'react';

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <label>Search your recipes</label>
      <input type="text" placeholder='enter recipe name here' />
    </>
  );
}

export default SearchBar;