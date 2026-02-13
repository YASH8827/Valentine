
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Valentine App: Starting initialization...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Valentine App Error: Root element not found.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Valentine App: Mounted successfully.");
  } catch (err) {
    console.error("Valentine App Error: Failed to render component tree.", err);
    rootElement.innerHTML = `
      <div style="display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif; color:#ff4d4d; text-align:center; padding:20px;">
        <div>
          <h1>Something went wrong 🥺</h1>
          <p>Please try refreshing the page or check the developer console for errors.</p>
        </div>
      </div>
    `;
  }
}
