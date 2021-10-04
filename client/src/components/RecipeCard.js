import { Link } from "react-router-dom";

// here we destructure the fields from the props object
export default function RecipeCard({ strMeal, strTags, _id }) {
  console.log(strMeal);
  return (
    <div>
      <Link to={`/recipe/${_id}`}>
        <h3>{strMeal}</h3>
      </Link>
      <p>{strTags}</p>
    </div>
  );
}
