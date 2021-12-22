import {useState} from 'react';
import './Pages.css';
import {recipeData} from './Data';

function Pages(){
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
