import './App.css';
import React, {Component} from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Buttons from './components/Buttons';
import Modal from './components/Modal';
import Grid from './components/PageGrid';
import RecipeTemplate from './components/RecipeTemplate';
import RecipeData from './components/Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      recipeData: RecipeData,
      userInput: '',
      recipe: {},
    };
  }
  handleFilter = (event) => {
    console.log("hi from onChange", event.target.value)
    this.setState({
      inputValue: event.target.value
    })
 
  }
  // handleFilter = (userInput,recipeData) => {
  //  return recipeData.filter(recipe => {
  //     if(recipe.includes(userInput)){
  //       return recipe;
  //     }
  //     return recipe;
  //   })
  // };
  handleUserInput = (event) => {
    this.setState({userInput: event.target.value, filteredRecipes: this.handleFilter(event.target.value, this.state.recipeData)})
  };
  showModal = () => {
    this.setState({ show: true});
  };
  hideModal = () => {
    this.setState({ show: false});
  };
 
  render() {

    const filteredRecipe = 
    this.state.recipeData.filter(recipe => {
      return recipe.name.includes(this.state.inputValue)
    })

    return (
      <main className='App'>
        <Title />
        <SearchBar data={this.state.recipeData} handleUserInput={this.handleUserInput} userInputValue={this.state.userInput} onHandleFilter={this.handleFilter} />
        <Modal show={this.state.show} handleClose={this.hideModal} />
        <Buttons show={this.showModal}/>
        <Grid data={this.state.recipeData} filteredRecipes={filteredRecipe} />
      </main>
    );
  }
}

export default App;
