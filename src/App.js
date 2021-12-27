import './App.css';
import React, {Component} from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Buttons from './components/Buttons';
import Modal from './components/Modal';
import Grid from './components/PageGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      recipeData: [],
    };
  }
  showModal = () => {
    this.setState({ show: true});
  };
  hideModal = () => {
    this.setState({ show: false});
  };
  loadRecipeDataAsync = async () => {
    const recipeData = await import('./components/Data.json'); /* axios will be used here later */
    return recipeData;
  }
  componentDidMount = async (state) => {
    if(this.state.recipeData.length === 0)
      {
        const recipeData = await this.loadRecipeDataAsync();
        this.setState({recipeData})
      }
  }
  render() {
    return (
      <main className='App'>
        <Title />
        <SearchBar data={this.state.recipeData} />
        <Modal show={this.state.show} handleClose={this.hideModal} /*handleSave={this.saveRecipe}*//>
        <Buttons show={this.showModal}/>
        <Grid data={this.state.recipeData} />
      </main>
    );
  }
}

export default App;
