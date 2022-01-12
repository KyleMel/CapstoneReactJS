import './App.css';
import React, {Component} from 'react';
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
      showModal: false,
      recipeData: RecipeData,
      userInput: '',
      filteredRecipes: [],
      showFilteredList: false,
      isChecked: true,
    };
  }

  handleFilter = (userInput, recipeData) => {
    if(!userInput) {
      return recipeData;
    }
    return recipeData.filter((recipeData) => {
      const recipeTitle = recipeData.title.toLowerCase();
      return recipeTitle.includes(userInput.toLowerCase());
    });
  };
  handleUserInput = (event) => {
    const filteredList = this.handleFilter(event.target.value, this.state.recipeData)
    this.setState({
      userInput: event.target.value, 
      filteredRecipes: filteredList,
      showFilteredList: filteredList.length > 0
    })
  };
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
        <SearchBar handleUserInput={this.handleUserInput} userInputValue={this.state.userInput}/>
        <Modal show={this.state.show} handleClose={this.hideModal} />
        <Buttons show={this.showModal}/>
        <Grid allRecipes={this.state.recipeData} filteredRecipes={this.state.filteredRecipes} showFilteredList={this.state.showFilteredList} />
      </main>
    );
  }
}

export default App;
