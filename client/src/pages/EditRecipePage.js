import axios from "axios";
import { useState, useEffect } from "react";

export default function EditProjectPage(props) {
  const API_URL = "http://localhost:5005";

  const [strMeal, setStrMeal] = useState("");
  const [strTags, setStrTags] = useState("");

  const recipeId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/recipes/${recipeId}`)
      .then((response) => {
        setStrMeal(response.data.strMeal);
        setStrTags(response.data.strTags);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteRecipe = () => {
    axios
      .delete(`${API_URL}/api/recipes/${recipeId}`)
      .then(() => {
        // redirect to the project list
        props.history.push("/recipes");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { strMeal, strTags };
    axios
      .put(`${API_URL}/api/recipes/${recipeId}`, requestBody)
      .then((response) => {
        // this is a redirect using react router dom
        props.history.push(`/recipe/${recipeId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit this recipe</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="strMeal">Name: </label>
        <input
          type="text"
          name="strMeal"
          value={strMeal}
          onChange={(e) => setStrMeal(e.target.value)}
        />
        <label htmlFor="strTags">Tags: </label>
        <input
          type="text"
          name="strTags"
          value={strTags}
          onChange={(e) => setStrTags(e.target.value)}
        />
        <button type="submit">Update this recipe</button>
      </form>

      <button onClick={deleteRecipe}>Delete this recipe 🗑</button>
    </div>
  );
}
