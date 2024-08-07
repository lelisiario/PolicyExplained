import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import './styles.css'; // Component-specific styles
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
