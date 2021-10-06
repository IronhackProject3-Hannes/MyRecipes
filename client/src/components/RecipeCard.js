import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// here we destructure the fields from the props object
export default function RecipeCard(props) {
  const [heart, setHeart] = useState(false);

  // const API_URL = "http://localhost:5005";
  // const userId = user._id;

  useEffect(() => {
    if (props.favorite.includes(_id)) {
      setHeart(true);
    } else {
      setHeart(false);
    }
  }, [props.favorite]);

  // const handleFavorite = () => {
  //   if (!favorite.includes(_id)) {
  //     axios
  //       .put(`${API_URL}/api/user/${userId}`, {
  //         favorite: [...favorite, _id],
  //       })
  //       .then((response) => {
  //         setFavorite([...favorite, _id]);
  //         console.log(favorite);
  //         console.log(response.data);
  //       })
  //       .catch((err) => console.log(err));
  //   } else {
  //     const filtedIds = user.favorite.filter((id) => {
  //       if (id == _id) {
  //         console.log(id);
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     });
  //     console.log(filtedIds);
  //     axios
  //       .delete(`${API_URL}/api/user/${userId}`, {
  //         data: { favorite: [...filtedIds] },
  //       })
  //       .then((response) => {
  //         console.log("thisis res.data:", response.data);
  //         setFavorite(response.data.favorite);
  //         console.log("this is fav:", favorite);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  const { strMeal, strTags, _id, strMealThumb, strCategory, strArea } = props;

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
