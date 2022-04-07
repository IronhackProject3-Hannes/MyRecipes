import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// here we destructure the fields from the props object
export default function RecipeCard(props) {
  const [heart, setHeart] = useState(false);
  const { strMeal, strTags, _id, strMealThumb, strCategory, strArea } = props;
  const user = props.user;
  useEffect(() => {
    if (user) {
      if (props.favorite.includes(_id)) {
        setHeart(true);
      } else {
        setHeart(false);
      }
    } else {
      setHeart(false);
    }
  }, [props.favorite, _id, user]);

  return (
    <div className="card-box">
      <div className="card-left">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-right">
        <Link to={`/recipe/${_id}`} className="card-title">
          {strMeal.length > 20 ? strMeal.slice(0, 20) + "..." : strMeal}
        </Link>
        <div className="card-text">
          <p>
            {strCategory} / {strArea} /
          </p>
          <p>
            {strTags && strTags.length > 10
              ? strTags.slice(0, 10) + "..."
              : strTags}
          </p>
          <div className="fav-btn">
            {heart === true ? (
              <button onClick={() => props.handleFavorite(_id)}>
                <i className="fas fa-heart"></i>
              </button>
            ) : (
              <button onClick={() => props.handleFavorite(_id)}>
                <i className="far fa-heart"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
