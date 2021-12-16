import './App.css';
import React, {Component, useState} from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Buttons from './components/Buttons';
import Modal from './components/Modal';
import Pages from './components/Pages';
import {createNewRecipe, editNewRecipe, deleteNewRecipe} from './utilities/RecipeUtilities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true});
  };
  hideModal = () => {
    this.setState({ show: false});
  };
  render() {
    return (
      <main className='App'>
        <Title />
        <SearchBar />
        <Modal show={this.state.show} handleClose={this.hideModal}/>
        <button type="button" onClick={this.showModal}>Open</button>
        <button type="button" onClick={createNewRecipe}>Create</button>
        <button type="button" onClick={editNewRecipe}>Edit</button>
        <button type="button" onClick={deleteNewRecipe}>Delete</button>
        <Pages />
      </main>
    );
  }
}

export default App;
