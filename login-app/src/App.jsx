import { useState } from "react";
import "./App.css";
import Login from "./Login.jsx";

const hour = new Date().getHours();
console.log("The hour is", hour);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("App drew the page, isLoggedIn is", isLoggedIn);

  function handleLogin() {
    console.log("Login clicked");
    setIsLoggedIn(true);
  }

  function handleLogout() {
    console.log("Log out clicked");
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Hello</h1>
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