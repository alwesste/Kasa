import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout/layout';
import Error from './components/Error/error';
import Home from './pages/Home/home';
import About from './pages/A-Propos/a-propos';
import Logement from './pages/Fiche-Logements/logement'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;    
    font-weight: 500;
    margin: auto;
    max-width:1440px
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
