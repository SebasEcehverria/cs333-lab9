import { useState } from "react";
import Input from "./Input.jsx";

// Displays the login form and checks that a username was entered.
function Login(props) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Updates the username as the user types.
  function handleChange(event) {
    setUsername(event.target.value);
    console.log("Username input changed");
  }

  // Checks the username and logs in if it is valid.
  function handleClick() {
    if (username === "") {
      console.log("No username typed");
      setError("Please type a username.");
      return;
    }

    console.log("Logging in as", username);
    setError("");
    props.onLogin(username);
  }

  return (
    <form className="form">
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
      <Input type="password" placeholder="Password" />
      <button type="button" onClick={handleClick}>
        Login
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default Login;