import React, {useState} from 'react';
import './SearchBar.css';

export const SearchBar = (data) => {
  const [searchInput, setSearchInput] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.includes(searchWord);
    });
    setSearchInput(newFilter);
  };
  return (
    <>
      <div className='SearchBar'>
        <label className='Label'>Search your recipes</label>
        <input className='Input' type="text" placeholder='enter recipe name here' onchange={handleFilter} />
      </div>
      {searchInput.length != 0 && (
        <div>
        {data.map((value, key) => {
          return (
            <p>{value.title}</p>
          );
        })}
        </div>
      )}
    </>
  );
}

export default SearchBar;