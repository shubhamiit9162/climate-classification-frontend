import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals';

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in StrictMode
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Measure performance in the app
// Pass a function to log results (e.g., reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
