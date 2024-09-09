import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const LandingPage = () => {
  return (
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  );
};
root.render(<LandingPage />);
