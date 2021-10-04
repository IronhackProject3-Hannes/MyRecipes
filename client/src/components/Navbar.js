import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";

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
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/recipes">
            <button>Recipes</button>
          </Link>
          <Link to="/" onClick={() => handleLogout()}>
            <button>Logout</button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}
