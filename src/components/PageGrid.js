import React from 'react';
import Pages from './Pages';
import './PageGrid.css';

export default class Grid extends React.Component {
  renderData() {
    return this.props.data.map(item =>
      <Pages 
        key={item.id}
        fact={item}
      />
      );
  }
  render() {
    return (
      <section className='Grid'>
        {this.renderData()}
      </section>
    );
  }
}