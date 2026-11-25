import { useState } from "react";
import "./App.css";
import Login from "./Login.jsx";

// Get the current hour to determine if the break message should appear.
const hour = new Date().getHours();
console.log("The hour is", hour);

// Main component that controls the login state and displays the page.
function App() {
  // Track whether the user is logged in and store their username.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  console.log("App drew the page, isLoggedIn is", isLoggedIn);

  // Save the username and update the login state when Login is clicked.
  function handleLogin(name) {
    console.log("Login clicked");
    setUsername(name);
    setIsLoggedIn(true);
  }

  // Change the login state back to false when the user logs out.
  function handleLogout() {
    console.log("Log out clicked");
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Hello, {username}!</h1>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}

      {/* Only display this message when the current hour is 5 PM or later. */}
      {hour >= 17 && <p>It's after 5. Take a break!</p>}
    </div>
  );
}

export default App;