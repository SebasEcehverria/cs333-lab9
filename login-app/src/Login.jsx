import { useState } from "react";
import Input from "./Input.jsx";

// Display the login form and check that the user entered a username.
function Login(props) {
  // Store the username and any error messages.
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Update the username whenever the user types in the input field.
  function handleChange(event) {
    setUsername(event.target.value);
    console.log("Username input changed");
  }

  // Check if a username was entered before allowing the user to log in.
  function handleClick() {
    if (username === "") {
      console.log("No username typed");
      setError("Please type a username.");
      return;
    }

    // Clear previous errors and send the username to App.
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

      {/* Only show the error message when an error exists. */}
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default Login;