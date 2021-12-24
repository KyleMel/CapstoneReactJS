import './Pages.css';
import CheckBox from './CheckBox';

const Pages = (props) => {
  return (
    <div className='RecipeCards'>
      <CheckBox />
      <h2><u>{props.fact.title}</u></h2>
      <h3>Ingrediants</h3>
      <ul><li>{props.fact.ingrediants}</li></ul>
      <h3>Instructions</h3>
      <p>{props.fact.description}</p>
    </div>
  )
}

export default Pages;