import './App.css';
import React, {Component, useEffect} from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Buttons from './components/Buttons';
import Modal from './components/Modal';
import Grid from './components/PageGrid';
import RecipeData from './components/Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      RecipeData,
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
        <SearchBar RecipeData={this.state.RecipeData} />
        <Modal show={this.state.show} handleClose={this.hideModal} /*handleSave={this.saveRecipe}*//>
        <Buttons handleOpen={this.showModal}/>
        <Grid RecipeData={this.state.RecipeData} />
      </main>
    );
  }
}

export default App;
