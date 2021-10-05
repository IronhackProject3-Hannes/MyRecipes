import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

export default function RecipeListPage(props) {
  // we don't need this bc we are using the proxy in package.json
  const API_URL = "http://localhost:5005";

  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    // get request to the server
    axios
      .get(`${API_URL}/api/recipes`)
      .then((response) => {
        console.log(response);
        setRecipes(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // get all the recipes from the server
    getAllRecipes();
    // bc of the empty dependency array we only get all the recipes
    // on the first render (when the component is mounted)
  }, []);

  //search with name and tags
  const [search, setSearch] = useState("");

  const filteredRecipe = recipes.filter((recipe) =>
    `${recipe.strMeal}${recipe.strCategory}${recipe.strArea}${recipe.strTags}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="recipes-container">
      <div className="search-box">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find your Recipe"
        />
      </div>
      <h1 className="list-title">All Recipes</h1>
      <div className="add-btn">
        <Link to="/recipes/add">
          <button>Add recipe</button>
        </Link>
      </div>
      <div className="cards-box">
        {filteredRecipe
          .sort((a, b) => {
            return a.strMeal.localeCompare(b.strMeal);
          })
          .map((recipe) => (
            <RecipeCard key={recipe._id} user={props.user} {...recipe} />
          ))}
      </div>
    </div>
  );
}
