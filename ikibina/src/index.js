import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const LandingPage = () => {
  return (
    <React.StrictMode>
      <header style={{ backgroundColor: "skyblue", fontSize: "10px" }}>
        <h1>Welcome to My Landing Page</h1>
      </header>
      <section className="hero">
        <menu style={{ display: "flex", flexDirection: "row ",  }}>
          <li>Home</li>
          <li>Contact</li>
          <li>Login</li>
        </menu>
      </section>
    </React.StrictMode>
  );
};
root.render(<LandingPage />);
