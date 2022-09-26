import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="page"><div className="page__container">
    <Router>
      <App/>
    </Router>
    </div></div>
  </React.StrictMode>
);
