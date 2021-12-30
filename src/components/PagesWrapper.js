import React from "react";
import Pages from './Pages';

export default function PagesWrapper(props) {
  return props.recipes.map(recipe =>
    <Pages 
      recipe={recipe}
    />
  );
}
