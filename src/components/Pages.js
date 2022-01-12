import './Pages.css';
import CheckBox from './CheckBox';

const Pages = ({recipe}) => {
  return (
    <div className='RecipeCards'>
      <CheckBox  />
      <h2><u>{recipe.title}</u></h2>
      <h3>Ingredients</h3>
      <ul><li>{recipe.ingredients}</li></ul>
      <h3>Instructions</h3>
      <p>{recipe.description}</p>
    </div>
  )
}

export default Pages;