import './App.css';
import React, {Component, useState, useEffect} from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Buttons from './components/button/Buttons';
import Modal from './components/pages/Modal';
import Grid from './components/pages/PageGrid';
import RecipeData from './components/Data.json';

function App2() {
  const [showModal, setShowModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const recipeData = RecipeData;

    return (
      <main className='App'>
      <Title />
      <SearchBar data={recipeData} search={searchTerm} filter={setSearchTerm} />
      <Modal show={showModal} hide={setShowModal} /*handleSave={this.saveRecipe}*//>
      <Buttons hide={setShowModal}/>
      <Grid data={recipeData} />
    </main>
  );
}

export default App2;