import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/header';
import Error from './components/Error/error';
import Home from './pages/Home/home';
import About from './pages/A-Propos/a-propos';

const GlobalStyle = createGlobalStyle`
  div {
    font-family: Montserrat;
    margin: auto;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
