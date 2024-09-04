import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const LandingPage = () => {
  return (
    <React.StrictMode>
      <header>
        <h1>Welcome to My Landing Page</h1>
      </header>
      <section className="hero">
        <h2>This is a hero section</h2>
        <p>This is a sample paragraph.</p>
      </section>
      <footer>
        <p>&copy; 2023 My Landing Page</p>
      </footer>
    </React.StrictMode>
  );
};
root.render(<LandingPage />);

