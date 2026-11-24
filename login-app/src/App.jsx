import { useState } from "react";
import "./App.css";
import Login from "./Login.jsx";

const hour = new Date().getHours();
console.log("The hour is", hour);

// Main component that manages login state and displays the page.
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  console.log("App drew the page, isLoggedIn is", isLoggedIn);

  // Saves the username and changes the login state to true.
  function handleLogin(name) {
    console.log("Login clicked");
    setUsername(name);
    setIsLoggedIn(true);
  }

  // Logs out the user and displays the login form again.
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

      {hour >= 17 && <p>It's after 5. Take a break!</p>}
    </div>
  );
}

export default App;