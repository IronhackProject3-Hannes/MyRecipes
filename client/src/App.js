import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RecipeListPage from "./pages/RecipeListPage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import EditRecipePage from "./pages/EditRecipePage";
import ProfilePage from "./pages/ProfilePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import Image from "./pages/Image";

function App(props) {
  const [user, setUser] = useState(props.user);

  const addUser = (user) => {
    setUser(user);
  };

  console.log("App js: ", user);

  return (
    <div className="App">
      <Navbar user={user} setUser={addUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/image" component={Image} />
        {/* not need to protect all recipe */}
        <ProtectedRoute
          exact
          path="/profile/:id"
          user={user}
          component={ProfilePage}
          redirect="/login"
        />
        <Route
          exact
          path="/recipes"
          render={(props) => <RecipeListPage user={user} {...props} />}
        />
        {/* <Route
          exact path="/projects"
          render={props => {
            if (user) {
              return <ProjectListPage {...props} />
            } else {
              return <Redirect to="/" />
            }
          }}
        /> */}
        {/* <ProtectedRoute
          exact
          path="/recipes"
          user={user}
          component={RecipeListPage}
        /> */}
        <ProtectedRoute
          exact
          path="/recipes/add"
          user={user}
          component={AddRecipePage}
          redirect="/login"
        />
        <ProtectedRoute
          exact
          path="/recipe/:id"
          user={user}
          component={RecipeDetailsPage}
          redirect="/login"
        />
        <ProtectedRoute
          exact
          path="/recipe/edit/:id"
          user={user}
          component={EditRecipePage}
          redirect="/recipe/:id"
        />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={addUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={addUser} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
