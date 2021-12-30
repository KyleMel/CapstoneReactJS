import React from 'react';
import PagesWrapper from './PagesWrapper';
import './PageGrid.css';

export default class Grid extends React.Component {
  render() {
    return(
      <section className='Grid'>
        <PagesWrapper
          recipes={this.props.showFilteredList ? this.props.filteredRecipes : this.props.allRecipes}
        />
      </section>
    )
  }
}