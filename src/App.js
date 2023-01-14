import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';

import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import SinglePost from './components/SinglePost/SinglePost';
import Contacts from './components/Contacts/Contacts';
//import './App.css';
import './style.css';

import { useContext } from 'react';
//import { DarkModeContext } from './context/DarkModeContext';

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  //const { darkMode } = useContext(DarkModeContext);

  return (
    //<ThemeProvider Theme={darkTheme}>

    <Router>
      <CssBaseline />
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/post/:slug"
            element={<SinglePost />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/contact"
            element={<Contacts />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    //</ThemeProvider>
  );
}

export default App;
