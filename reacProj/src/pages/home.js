import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="login" style={{ textDecoration: "none" }}>
        click here for see login Page
      </Link>
      <button>Hello There </button>
      <h1>This is the login Page</h1>
      <Link to="login" style={{ textDecoration: "none" }}>
        click here for see login Page
      </Link>
      <button>login </button>
    </div>
  );
}
export default Home;
