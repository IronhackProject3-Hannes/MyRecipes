import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProjectDetailsPage(props) {
  const [recipe, setRecipe] = useState(null);

  const recipeId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`/api/recipes/${recipeId}`)
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }, [recipeId]);

  return (
    <div className="container">
      {recipe && (
        <>
          <h1>{recipe.strMeal}</h1>
          <div className="detail-container">
            <div className="detail-left">
              <img src={recipe.strMealThumb} alt="" />
              <h4 className="category">Category : {recipe.strCategory}</h4>
              <h4 className="area">Area : {recipe.strArea}</h4>
              <h4 className="tags">Tags : {recipe.strTags}</h4>
            </div>
            <div className="detail-right">
              <h4>Ingredients</h4>
              <div className="ingredients">
                {recipe.Ingredients.map((ingredient) => {
                  return (
                    <p>
                      {ingredient.strIngredient}: {ingredient.strMeasure}
                    </p>
                  );
                })}
              </div>
              <h4>instructions</h4>
              <ul className="instructions">
                {recipe.Instructions.map((el) => {
                  return <li>{el}</li>;
                })}
              </ul>
            </div>
          </div>

          {props.user._id === recipe.creatorId ? (
            <Link to={`/recipe/edit/${recipe._id}`}>
              <button className="edit-btn">Edit this recipe</button>
            </Link>
          ) : (
            props.user.role === "admin" && (
              <Link to={`/recipe/edit/${recipe._id}`}>
                <button className="edit-btn">Edit this recipe</button>
              </Link>
            )
          )}
        </>
      )}
    </div>
  );
}
