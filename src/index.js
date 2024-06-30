import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the main App component

// Rendering the App component wrapped in React.StrictMode for stricter checks during development
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Rendering the main App component */}
  </React.StrictMode>,
  document.getElementById('root') // Attaching the rendered output to the element with id 'root' in the HTML
);
