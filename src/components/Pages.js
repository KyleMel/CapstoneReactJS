import './Pages.css';
import data from './Data.json';

const Pages = (props) => {
  return (
    <div className='RecipeCards'>
      <input className='CheckBox' type='checkbox' />
      <h2><u>{props.fact.title}</u></h2>
      <ul><li>{props.fact.ingrediants}</li></ul>
      <p>{props.fact.description}</p>
    </div>
  )
}

export default Pages;