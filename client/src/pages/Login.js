import { useState } from "react";
import { login } from "../services/auth";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(username, password)
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
          // redirect to the recipes list page
          props.history.push("/recipes");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="login-container">
        <h3>Log In</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          {message && <h3 className="message">{message}</h3>}
        </form>
      </div>
    </>
  );
}
