import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    {/* A common convention is to set up the root component as "App" and set it up in a separate file.
    In project Amazon Bestsellers, that root component was Booklist */}

  </React.StrictMode>
  /*Root component is wrapped in this strict mode.
  Strict mode is a tool for highlighting potential problems in application.
  It activates additional checks and warnings for its descendants.
  Note: it only runs in development - it's not going to impact your production build
  It renders everything inside the wrap twice.*/
);