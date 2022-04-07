import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Profile(props) {
  const [user, setUser] = useState(props.user);
  const [username, setUsername] = useState(props.user.username);
  const [favorite, setFavorite] = useState(props.user.favorite);
  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);

  const getUser = () => {
    axios
      .get("/api/auth/loggedin")
      .then((res) => {
        setUser(res.data);
        setUsername(res.data.username);
        setFavorite(res.data.favorite);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, [user]);

  const userId = props.user._id;
  useEffect(() => {
    axios
      .get(`/api/user/creator/${userId}`)
      .then((res) => {
        console.log("user created", res.data);
        setUserRecipes(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  useEffect(() => {
    axios
      .get(`/api/user/${userId}`)
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      })
      .catch((err) => console.log(err));
  }, [userId, favorite]);

  const handleFavorite = (id) => {
    if (!favorite.includes(id)) {
      axios
        .put(`/api/user/${userId}`, {
          favorite: [...favorite, id],
        })
        .then((res) => {
          setFavorite([...favorite, id]);
          console.log("add fav:", favorite);
          console.log("added user:", res.data);
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
        .delete(`/api/user/${userId}`, {
          data: { favorite: [...filtedIds] },
        })
        .then((res) => {
          console.log("thisis res.data:", res.data);
          setFavorite(res.data.favorite);
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
            <div className="profile-recipes">
              {userRecipes.length > 0 ? (
                userRecipes
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
                  <h1>Add your Recipe</h1>
                </>
              )}
            </div>

            <div>
              <Link to="/recipes/add">
                <button className="add-btn">Add recipe</button>
              </Link>
            </div>
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
                  <Link to="/recipes">
                    <button className="add-btn">Go to recipes</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
