import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Register from './components/Register';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from './components/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="page"><div className="page__container">
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/sign-up" element={<Register />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
      </Routes>
    </Router>
    </div></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
