import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

export default function Profile(props) {
  const API_URL = "http://localhost:5005";

  const [username, setUsername] = useState(props.user.username);
  const [favorite, setFavorite] = useState(props.user.favorite);
  const [recipes, setRecipes] = useState([]);

  console.log(favorite);
  const getFavoriteRecipes = () => {
    console.log(props.user);
    const userId = props.user._id;
    axios
      .get(`${API_URL}/api/user/${userId}`)
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFavoriteRecipes();
  }, [favorite]);

  const userId = props.user._id;

  const handleFavorite = (id) => {
    if (!favorite.includes(id)) {
      axios
        .put(`${API_URL}/api/user/${userId}`, {
          favorite: [...favorite, id],
        })
        .then((response) => {
          setFavorite([...favorite, id]);
          console.log("add fav:", favorite);
          console.log("added user:", response.data);
        })
        .catch((err) => console.log(err));
    } else {
      const filtedIds = favorite.filter((el) => {
        if (el !== id) {
          console.log(el);
          console.log(id);
          return true;
        } else {
          return false;
        }
      });
      console.log(filtedIds);
      axios
        .delete(`${API_URL}/api/user/${userId}`, {
          data: { favorite: [...filtedIds] },
        })
        .then((response) => {
          console.log("thisis res.data:", response.data);
          setFavorite(response.data.favorite);
          console.log("this is fav:", favorite);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="container">
        <h3>User Profile</h3>
        <h4>User Info</h4>
        <h5>User Name: {username}</h5>
        <div className="profile-container">
          <div className="profile-left">
            <h3>Your Recipe</h3>
            {}
          </div>
          <div className="profile-right">
            <h3>User Favorite</h3>
            <div className="favorite">
              {recipes.length > 0 ? (
                recipes
                  .sort((a, b) => {
                    return a.strMeal.localeCompare(b.strMeal);
                  })
                  .map((recipe) => (
                    <RecipeCard
                      key={recipe._id}
                      user={props.user}
                      favorite={favorite}
                      handleFavorite={handleFavorite}
                      {...recipe}
                    />
                  ))
              ) : (
                <>
                  <h1>Add your Favorites</h1>
                  add link to recipes list
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
