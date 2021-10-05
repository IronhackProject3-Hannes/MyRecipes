import axios from "axios";
import { useState, useEffect } from "react";

export default function EditProjectPage(props) {
  const API_URL = "http://localhost:5005";

  const [strMeal, setStrMeal] = useState("");
  const [strCategory, setStrCategory] = useState("");
  const [strArea, setStrArea] = useState("");
  const [strMealThumb, setStrMealThumb] = useState("");
  const [strTags, setStrTags] = useState("");

  const [Instructions, setInstructions] = useState([""]);

  // handle input change
  const handleInstructionsChange = (e, index) => {
    const { value } = e.target;
    const list = [...Instructions];
    list[index] = value;
    setInstructions(list);
  };

  // handle click event of the Remove button
  const handleInstructionsRemoveClick = (index) => {
    const list = [...Instructions];
    list.splice(index, 1);
    setInstructions(list);
  };

  // handle click event of the Add button
  const handleInstructionsAddClick = () => {
    setInstructions([...Instructions, ""]);
  };
  const [Ingredients, setIngredients] = useState([
    { strIngredient: "", strMeasure: "" },
  ]);

  // handle input change
  const handleIngredientsChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...Ingredients];
    list[index][name] = value;
    setIngredients(list);
  };

  // handle click event of the Remove button
  const handleIngredientsRemoveClick = (index) => {
    const list = [...Ingredients];
    list.splice(index, 1);
    setIngredients(list);
  };

  // handle click event of the Add button
  const handleIngredientsAddClick = () => {
    setIngredients([...Ingredients, { strIngredient: "", strMeasure: "" }]);
  };

  //get current infromation
  const recipeId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/recipes/${recipeId}`)
      .then((response) => {
        setStrMeal(response.data.strMeal);
        setStrCategory(response.data.strCategory);
        setStrArea(response.data.strArea);
        setStrMealThumb(response.data.strMealThumb);
        setStrTags(response.data.strTags);
        setInstructions(response.data.Instructions);
        setIngredients(response.data.Ingredients);
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
    const requestBody = {
      strMeal,
      strCategory,
      strArea,
      strMealThumb,
      Ingredients,
      Instructions,
      strTags,
    };
    axios
      .put(`${API_URL}/api/recipes/${recipeId}`, requestBody)
      .then((response) => {
        // this is a redirect using react router dom
        props.history.push(`/recipe/${recipeId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="edit-container">
      <h3 className="title">Edit this recipe</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="strMeal">Name: </label>
        <input
          type="text"
          name="strMeal"
          value={strMeal}
          onChange={(e) => setStrMeal(e.target.value)}
        />
        <label htmlFor="strCategory">Category: </label>
        <input
          type="text"
          name="strCategory"
          value={strCategory}
          onChange={(e) => setStrCategory(e.target.value)}
        />
        <label htmlFor="strArea">Area: </label>
        <input
          type="text"
          name="strArea"
          value={strArea}
          onChange={(e) => setStrArea(e.target.value)}
        />
        <label htmlFor="strMealThumb">Image: </label>
        <input
          type="text"
          name="strMealThumb"
          value={strMealThumb}
          onChange={(e) => setStrMealThumb(e.target.value)}
        />
        <label htmlFor="Ingredients">Ingredients: </label>
        {Ingredients.map((x, i) => {
          return (
            <div className="box" key={i}>
              <input
                className="ml10"
                name="strIngredient"
                placeholder="Enter Ingredient"
                value={x.strIngredient}
                onChange={(e) => handleIngredientsChange(e, i)}
              />
              <input
                className="ml10"
                name="strMeasure"
                placeholder="Enter amount"
                value={x.strMeasure}
                onChange={(e) => handleIngredientsChange(e, i)}
              />
              <div className="btn-box">
                {Ingredients.length !== 1 && (
                  <button
                    className="mr10"
                    onClick={() => handleIngredientsRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {Ingredients.length - 1 === i && (
                  <button className="mr10" onClick={handleIngredientsAddClick}>
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <label htmlFor="Instructions">Instructions: </label>
        {Instructions.map((x, i) => {
          return (
            <div className="box" key={i}>
              <input
                className="ml10"
                name="Instructions"
                placeholder="Enter Instructions"
                value={x}
                onChange={(e) => handleInstructionsChange(e, i)}
              />
              <div className="btn-box">
                {Instructions.length !== 1 && (
                  <button
                    className="mr10"
                    onClick={() => handleInstructionsRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {Instructions.length - 1 === i && (
                  <button className="mr10" onClick={handleInstructionsAddClick}>
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <label htmlFor="strTags">Tags: </label>
        <input
          type="text"
          name="strTags"
          value={strTags}
          onChange={(e) => setStrTags(e.target.value)}
        />
        <button className="update-btn" type="submit">
          Update
        </button>
      </form>

      <button className="edit-btn" onClick={deleteRecipe}>
        Delete This
      </button>
    </div>
  );
}
