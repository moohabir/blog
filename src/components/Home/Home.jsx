import React from 'react';
import { Facebook, GitHub } from '@mui/icons-material';

//import home.css from "./components/Home/home.css";

import { Button, Typography } from '@mui/material';
import About from '../About/About';

import Contacts from '../Contacts/Contacts';
import Blog from '../Blog/Blog';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <main className="home">
        <Blog />
        <Contacts />
      </main>
    </>
  );
}

export default Home;
