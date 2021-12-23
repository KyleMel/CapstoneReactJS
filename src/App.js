import './App.css';
import React, {Component, useState} from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Buttons from './components/Buttons';
import Modal from './components/Modal';
import Grid from './components/PageGrid';
import facts from './components/Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      facts,
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
        <Buttons />
        <Grid facts={this.state.facts} />
      </main>
    );
  }
}

export default App;
