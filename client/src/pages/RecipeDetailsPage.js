import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProjectDetailsPage(props) {
  const API_URL = "http://localhost:5005";

  const [recipe, setRecipe] = useState(null);

  const recipeId = props.match.params.id;

  const getRecipe = () => {
    console.log(recipeId);
    axios
      .get(`${API_URL}/api/recipes/${recipeId}`)
      .then((response) => {
        console.log(response.data);
        setRecipe(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      {recipe && (
        <>
          <h1>{recipe.strMeal}</h1>
          <p>{recipe.strTags}</p>
          <Link to={`/recipe/edit/${recipe._id}`}>
            <button>Edit this recipe</button>
          </Link>
        </>
      )}
      {/* Edit the project */}
    </div>
  );
}
