import {useState} from 'react';
import './Pages.css';
import {recipeData} from './Data';

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
    <>
      <div className="RecipeCards">
        {recipeData.map((data, key) => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <li>{data.ingrediants}</li>
              <p>{data.description}</p>
            </div>
            ) 
        })}
      </div>
    </>
  )
}

export default Pages;
