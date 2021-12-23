import './Pages.css';

const Pages = (props) => {
  return (
    <div className='RecipeCards'>
      <h2>{props.fact.title}</h2>
      <li><ul>{props.fact.ingrediants}</ul></li>
      <p>{props.fact.description}</p>
    </div>
  )
}

export default Pages;