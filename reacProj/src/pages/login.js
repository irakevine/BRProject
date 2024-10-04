import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>this is login Page </h2>
      <Link to="/" style={{ textDecoration: "none" }}>
        click here for see Home Page
      </Link>
    </div>
  );
}
export default Login;
