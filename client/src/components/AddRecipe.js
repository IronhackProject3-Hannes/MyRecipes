import { useState } from "react";
import axios from "axios";

export default function AddProject(props) {
  const API_URL = "http://localhost:5005";

  const [strMeal, setStrMeal] = useState("");
  const [strTags, setStrTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // make a post request to the server with the form fields in the body
    const requestBody = { strMeal, strTags };
    axios
      .post(`${API_URL}/api/projects`, requestBody)
      .then((response) => {
        // reset the state and thereby reset the form
        setStrMeal("");
        setStrTags("");
        // we need to trigger 'getAllProjects' in the ProjectListPage component
        props.refreshProjects();
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
        <button type="submit">Add this project ＋</button>
      </form>
    </div>
  );
}
