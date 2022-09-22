import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import ProtectedRoute from './components/ProtectedRoute';
import App from './components/App';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import InfoTooltip from './components/InfoTooltip';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="page"><div className="page__container">
    <Router>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route element={<App/>} path="/" exact></Route>
        </Route>
        <Route element={<Register/>} path="/sign-up" />
        <Route element={<Login/>} path="/sign-in"/>
        <Route element={<InfoTooltip/>} path="/*"/>
        </Routes>
      </Router>
    </div></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
