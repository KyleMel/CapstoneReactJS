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
        <SearchBar data={this.state.RecipeData} />
        <Modal show={this.state.show} handleClose={this.hideModal} /*handleSave={this.saveRecipe}*//>
        <Buttons show={this.showModal}/>
        <Grid data={this.state.RecipeData} />
      </main>
    );
  }
}

export default App;
