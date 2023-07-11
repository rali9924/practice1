import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import FrontPage from './frontpage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);