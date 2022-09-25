import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import ProtectedRoute from './components/ProtectedRoute';
import App from './components/App';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';

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
