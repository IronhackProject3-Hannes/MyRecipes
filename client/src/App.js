import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

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
        {/* <Route exact path="/projects" component={ProjectListPage} /> */}
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
        <ProtectedRoute
          exact
          path="/projects"
          user={user}
          component={ProjectListPage}
        />
        {/* <Route exact path="/projects/:id" component={ProjectDetailsPage} /> */}
        <ProtectedRoute
          exact
          path="/projects/:id"
          user={user}
          component={ProjectDetailsPage}
          redirect="/login"
        />
        <Route exact path="/projects/edit/:id" component={EditProjectPage} />
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
