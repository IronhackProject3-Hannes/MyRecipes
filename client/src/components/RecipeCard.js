import { Link } from "react-router-dom";

// here we destructure the fields from the props object
export default function RecipeCard({
  strMeal,
  strTags,
  _id,
  strMealThumb,
  strCategory,
  strArea,
}) {
  console.log(strMeal);
  return (
    <div className="card-box">
      <div className="card-left">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-right">
        <Link to={`/recipe/${_id}`} className="card-title">
          {strMeal}
        </Link>
        <div className="card-text">
          <p>
            {strCategory} / {strArea} / {strTags}
          </p>
        </div>
      </div>
    </div>
  );
}
