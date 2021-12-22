import {useState} from 'react';
import './Pages.css';

const Pages = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Chicken Noodle Soup',
      ingrediants: 'One can of soup',
      description: 'It\'s chicken noodle soup from a can',
    },
  ])
  return (
    <div className="RecipeCards">
      {recipes.map((recipe) => (
        <h2 key={recipe.id}>{recipe.title}</h2>
        ))}
    </div>
  )
}

export default Pages;
