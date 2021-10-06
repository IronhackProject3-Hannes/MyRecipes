import { useState } from "react";
import axios from "axios";
//the service file is used to send (and get) the data to(from) the server
import service from "../services/image";

export default function AddProject(props) {
  const API_URL = "http://localhost:5005";

  const [strMeal, setStrMeal] = useState("");
  const [strCategory, setStrCategory] = useState("");
  const [strArea, setStrArea] = useState("");
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

  const [imageUrl, setImageUrl] = useState("");

  // this upload image to server and retrun url
  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        setImageUrl(response.secure_url);
        console.log(imageUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make a post request to the server with the form fields in the body
    const requestBody = {
      strMeal,
      strCategory,
      strArea,
      strMealThumb: imageUrl,
      Ingredients,
      Instructions,
      strTags,
      creatorId: props.user._id,
    };
    axios
      .post(`${API_URL}/api/recipes`, requestBody)
      .then((response) => {
        setStrMeal("");
        setStrCategory("");
        setStrArea("");
        setImageUrl("");
        setIngredients([""]);
        setInstructions([{ strIngredient: "", strMeasure: "" }]);
        setStrTags("");
        props.history.push("/recipes");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-container">
      <h3 className="add title">Add Recipe Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="strMeal">Name: </label>
        <input
          placeholder="Enter Name"
          type="text"
          name="strMeal"
          value={strMeal}
          onChange={(e) => setStrMeal(e.target.value)}
        />
        <label htmlFor="strCategory">Category: </label>
        <input
          placeholder="Enter Category"
          type="text"
          name="strCategory"
          value={strCategory}
          onChange={(e) => setStrCategory(e.target.value)}
        />
        <label htmlFor="strArea">Area: </label>
        <input
          placeholder="Enter Area"
          type="text"
          name="strArea"
          value={strArea}
          onChange={(e) => setStrArea(e.target.value)}
        />
        <label htmlFor="uploadImage">Image: </label>
        <input type="file" name="uploadImage" onChange={handleImage} />
        {imageUrl && <img src={imageUrl} style={{ height: "200px" }} />}
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
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(Ingredients)}</div>
        <div style={{ marginTop: 20 }}>{JSON.stringify(Instructions)}</div> */}
        <button className="add-btn" type="submit">
          Add Recipe <i class="fas fa-plus"></i>{" "}
        </button>
      </form>
    </div>
  );
}
