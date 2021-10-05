import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// here we destructure the fields from the props object
export default function RecipeCard({
  user,
  strMeal,
  strTags,
  _id,
  strMealThumb,
  strCategory,
  strArea,
}) {
  const [favorite, setFavorite] = useState([]);
  const [newUser, setNewUser] = useState(user);

  const API_URL = "http://localhost:5005";
  const userId = user._id;

  // const handleChange = () => {};

  const getFavorite = () => {
    setFavorite(user.favorite);
    setNewUser(user);
  };

  useEffect(() => {
    getFavorite();
  }, [favorite, user]);

  const handleFavorite = () => {
    if (!user.favorite.includes(_id)) {
      axios
        .put(`${API_URL}/api/user/${userId}`, {
          favorite: [...user.favorite, _id],
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log(user.favorite);
      const filtedIds = user.favorite.filter((id) => {
        if (id === _id) {
          console.log(id);
          return false;
        } else {
          return true;
        }
      });
      axios
        .delete(`${API_URL}/api/user/${userId}`, {
          data: { favorite: [...filtedIds] },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

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
          {favorite.includes(_id) ? (
            <button onClick={handleFavorite}>
              <i class="fas fa-heart"></i>
            </button>
          ) : (
            <button onClick={handleFavorite}>
              <i class="far fa-heart"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
