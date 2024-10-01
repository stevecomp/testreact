import React from "react";
import ReactDOM from "react-dom/client";

import App from './DisplayList/App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>

    <h2>Fruit List:</h2>
    <App />
    
  </React.StrictMode>

);
