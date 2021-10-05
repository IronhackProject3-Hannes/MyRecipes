import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

export default function Profile(props) {
  const API_URL = "http://localhost:5005";

  const [username, setUsername] = useState(props.user.username);
  const [favoriteIds, setFavoriteIds] = useState(props.user.favorite);
  const [favorite, setFavorite] = useState([]);
  console.log(favoriteIds);

  const getFavorite = () => {
    console.log(props.user);
    const userId = props.user._id;
    axios
      .get(`${API_URL}/api/user/${userId}`)
      .then((response) => {
        console.log(response.data);
        setFavorite(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFavorite();
  }, [favoriteIds]);

  return (
    <>
      <div className="profile-container">
        <h3>User Profile</h3>
        <div className="profile-left">
          <h3>User Info</h3>
          <h3>User Name: {username}</h3>
        </div>
        <div className="profile-right">
          <h3>User Favorite</h3>
          <div className="favorite">
            {favorite ? (
              favorite
                .sort((a, b) => {
                  return a.strMeal.localeCompare(b.strMeal);
                })
                .map((recipe) => (
                  <RecipeCard key={recipe._id} user={props.user} {...recipe} />
                ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
