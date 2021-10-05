import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

export default function Profile(props) {
  const API_URL = "http://localhost:5005";

  const [username, setUsername] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [message, setMessage] = useState("");

  const getFavorite = () => {
    console.log(props.user);
    const userId = props.user._id;
    axios
      .get(`${API_URL}/api/profile/${userId}`)
      .then((response) => {
        console.log(response.data);
        setFavorite(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFavorite();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="profile-container">
        <h3>User Profile</h3>
        <div className="profile-left">
          <h3>User Info</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {message && <h3>{message}</h3>}
          </form>
        </div>
        <div className="profile-right">
          <div className="favorite">
            {favorite
              .sort((a, b) => {
                return a.strMeal.localeCompare(b.strMeal);
              })
              .map((recipe) => (
                <RecipeCard key={recipe._id} user={props.user} {...recipe} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
