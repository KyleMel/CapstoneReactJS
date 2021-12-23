import './App.css';
import React, {Component, useState, useEffect} from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Buttons from './components/Buttons';
import Modal from './components/Modal';
import Grid from './components/PageGrid';
import RecipeData from './components/Data.json';

function App2() {
  const [showModal, setShowModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const recipeData = RecipeData;

  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);

    return (
      <main className='App'>
      <Title />
      <SearchBar recipeData={this.state.recipeData} />
      <Modal show={this.state.show} handleClose={this.hideModal} /*handleSave={this.saveRecipe}*//>
      <Buttons handleOpen={this.showModal}/>
      <Grid recipeData={this.state.recipeData} />
    </main>
  );
}

export default App2;