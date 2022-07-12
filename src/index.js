import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/GlobalStyle/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/hooks/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop/>
    <App />
  </Router>
);
