import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

export default function RecipeListPage(props) {
  // we don't need this bc we are using the proxy in package.json

  const [user, setUser] = useState(props.user);
  const [recipes, setRecipes] = useState([]);
  const [favorite, setFavorite] = useState(props.user.favorite);
  const [thisItems, setThisItems] = useState([]);
  const [thisPage, setThisPage] = useState(1);
  const [pages, setPages] = useState([]);

  const userId = props.user._id;

  const getUser = () => {
    axios
      .get("/api/auth/loggedin")
      .then((response) => {
        setUser(response.data);
        setFavorite(response.data.favorite);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  //get all recipes <= functions
  const getAllRecipes = () => {
    // get request to the server
    axios
      .get(`/api/recipes`)
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

  // handle favorite recipes <= functions
  const getFavorite = () => {
    setFavorite(props.user.favorite);
  };

  useEffect(() => {
    getFavorite();
  }, [props.user]);

  const handleFavorite = (id) => {
    if (!favorite.includes(id)) {
      axios
        .put(`/api/user/${userId}`, {
          favorite: [...favorite, id],
        })
        .then((response) => {
          setFavorite([...favorite, id]);
          console.log("add fav:", favorite);
          console.log("added user:", response.data);
        })
        .catch((err) => console.log(err));
    } else {
      const filtedIds = favorite.filter((el) => {
        if (el !== id) {
          console.log(el);
          console.log(id);
          return true;
        } else {
          return false;
        }
      });
      console.log(filtedIds);
      axios
        .delete(`/api/user/${userId}`, {
          data: { favorite: [...filtedIds] },
        })
        .then((response) => {
          console.log("thisis res.data:", response.data);
          setFavorite(response.data.favorite);
          console.log("this is fav:", favorite);
        })
        .catch((err) => console.log(err));
    }
  };

  //search with name, category, area and tags
  const [search, setSearch] = useState("");

  const filteredRecipe = () => {
    console.log(search);
    return recipes
      .sort((a, b) => {
        return a.strMeal.localeCompare(b.strMeal);
      })
      .filter((recipe) =>
        `${recipe.strMeal}${recipe.strCategory}${recipe.strArea}${recipe.strTags}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  };

  useEffect(() => {
    filteredRecipe();
  }, [search]);

  // only 20 items in one page
  const handleItems = () => {
    if (filteredRecipe().length > 20) {
      console.log(filteredRecipe());
      setThisItems(
        filteredRecipe().slice((thisPage - 1) * 20, (thisPage - 1) * 20 + 20)
      );
    } else {
      setThisItems(filteredRecipe());
    }
  };

  const getPages = () => {
    if (filteredRecipe().length > 20) {
      const totalPages = Math.floor(filteredRecipe().length / 20) + 1;
      const pagesArr = [];
      for (let i = 1; i <= totalPages; i++) {
        pagesArr.push(i);
      }
      setPages(pagesArr);
      console.log(pages);
    } else {
      setPages([1]);
    }
  };

  const handleThisPage = (e) => {
    setThisPage(e.target.value);
  };

  useEffect(() => {
    handleItems();
    getPages();
  }, [thisPage, recipes, search]);

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
      <div className="pages">
        {pages.map((page) => {
          return (
            <>
              {page === pages.length ? (
                <>
                  {" "}
                  <button onClick={handleThisPage} value={page}>
                    {page}
                  </button>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <button onClick={handleThisPage} value={page}>
                    {page}
                  </button>
                  <span>/</span>
                </>
              )}
            </>
          );
        })}
      </div>
      <div className="cards-box">
        {thisItems
          .sort((a, b) => {
            return a.strMeal.localeCompare(b.strMeal);
          })
          .map((recipe) => (
            <RecipeCard
              key={recipe._id}
              user={props.user}
              favorite={favorite}
              handleFavorite={handleFavorite}
              {...recipe}
            />
          ))}
      </div>
    </div>
  );
}
