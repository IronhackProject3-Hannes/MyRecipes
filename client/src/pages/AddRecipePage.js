import { useState } from "react";
import axios from "axios";

export default function AddProject(props) {
  const API_URL = "http://localhost:5005";

  const [strMeal, setStrMeal] = useState("");
  const [strTags, setStrTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // make a post request to the server with the form fields in the body
    const requestBody = { strMeal, strTags, creatorId: props.user._id };
    console.log(props.user);
    axios
      .post(`${API_URL}/api/recipes`, requestBody)
      .then((response) => {
        props.history.push("/recipes");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Add Recipe Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="strMeal">Name: </label>
        <input
          type="text"
          name="strMeal"
          value={strMeal}
          onChange={(e) => setStrMeal(e.target.value)}
        />
        <label htmlFor="strTags">strTags: </label>
        <input
          type="text"
          name="strTags"
          value={strTags}
          onChange={(e) => setStrTags(e.target.value)}
        />
        <button type="submit">Add this recipe ＋</button>
      </form>
    </div>
  );
}
