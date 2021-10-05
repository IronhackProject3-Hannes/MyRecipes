import { useState } from "react";
import { signup } from "../services/auth";

export default function Signup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(username, password)
      .then((response) => {
        console.log(response);
        if (response.message) {
          // reset the form
          setUsername("");
          setPassword("");
          // set the message
          setMessage(response.message);
        } else {
          // user is correctly signed up in the backend
          // add the user to the state of App.js
          props.setUser(response);
          // redirect to the login page
          props.history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="signup-container">
        <h3>Create Account</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          {message && <h3 className="message">{message}</h3>}
        </form>
      </div>
    </>
  );
}
