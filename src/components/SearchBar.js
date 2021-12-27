import React, {useState} from 'react';
import './SearchBar.css';

export const SearchBar = ({handleFilter, data}) => {
  const [userInputValue, setUserInputValue] = useState('');
  const handleUserInput = (onChangeEvent) => {
    setUserInputValue(onChangeEvent.target.value)
    console.log(onChangeEvent);
  }
  return (
    <>
      <div className='SearchBar'>
        <label className='Label'>Search your recipes</label>
        <input className='Input' type="text" value={userInputValue} placeholder='enter recipe name here' onChange={handleUserInput} />
      </div>
      {/* {searchInput.length !== 0 (
        <div>
        {data.map((value, key) => {
          return (
            <p>{value.title}</p>
          );
        })}
        </div>
      )} */}
    </>
  );
}

export default SearchBar;