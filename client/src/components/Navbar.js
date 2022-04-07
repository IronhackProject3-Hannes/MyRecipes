import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import homeIcon from "../images/home.png";

export default function Navbar(props) {
  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null);
    });
  };

  return (
    <nav>
      {props.user ? (
        <>
          <div className="nav-left">
            <Link to="/">
              <img className="home-icon" src={homeIcon} alt="home" />
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/recipes">
              <button className="nav-btn list">Recipes</button>
            </Link>
            <Link to={`/profile/${props.user._id}`}>
              <button className="nav-btn profile">Profile</button>
            </Link>
            <Link to="/" onClick={() => handleLogout()}>
              <button className="nav-btn logout">Logout</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="nav-left">
            <Link to="/">
              <img className="home-icon" src={homeIcon} alt="home" />
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/recipes">
              <button className="nav-btn list">Recipes</button>
            </Link>
            <Link to="/signup">
              <button className="nav-btn signup">Signup</button>
            </Link>
            <Link to="/login">
              <button className="nav-btn login">Login</button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
