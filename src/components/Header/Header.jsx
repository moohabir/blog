import React, { useContext, useState } from 'react';

import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
//import { DarkModeContext } from '../context/DarkModeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
//import '../style.css';

function Header() {
  const [show, setShow] = useState(false);

  //const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <AppBar
      position="sticky"
      spacing={3}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          //backgroundColor= {darkMode ? 'dark' : 'light'},
          backgroundColor: 'white',
          color: '#282c34',
        }}
      >
        <Typography
          variant="h3"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            fontSize: 'large',
            fontWeight: 'bold',
            color: '#282c34',
          }}
        >
          Moha Abdi
        </Typography>

        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: '10px',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'space-between',
              paddingRight: '10px',
              paddingLeft: '20px',
              gap: '30px',
            }}
          >
            <Typography
              component={Link}
              to="/"
              sx={{ textDecoration: 'none' }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/about"
              sx={{ textDecoration: 'none' }}
            >
              About
            </Typography>
            <Typography
              component={Link}
              to="blog"
              sx={{ textDecoration: 'none' }}
            >
              Blog
            </Typography>
            <Typography
              component={Link}
              to="contact"
              sx={{ textDecoration: 'none' }}
            >
              Contact
            </Typography>
          </Box>

          {/* for mobile*/}
          {show ? (
            <Box
              sx={{
                display: { xs: 'flex', sm: 'none' },
                justifyContent: 'space-around',
                flexDirection: 'column',
                //paddingRight: '10px',
                //paddingLeft: '20px',
                padding: '30px',
                position: 'absolute',
                left: '50%',
                right: '50%',
                top: '420px',
                bottom: 0,
                margin: 'auto',
                backgroundColor: 'transparent',
                color: 'black',
                marginRight: '50px',
                minHeight: '90vh',
                height: '300px',
                width: '100%',
                alignItems: 'center',
                transform: 'translate(100)',
                textDecoration: 'none',
              }}
            >
              <Typography
                href="/"
                component={Link}
                to="/"
                style={{ textDecoration: 'none' }}
              >
                Home
              </Typography>
              <Typography
                href="/about"
                component={Link}
                to="/about"
                style={{ textDecoration: 'none' }}
              >
                About
              </Typography>
              <Typography
                href="skills"
                component={Link}
                to="/skills"
                style={{ textDecoration: 'none' }}
              >
                Skills
              </Typography>
              <Typography
                href="projects"
                component={Link}
                to="/projects"
                style={{ textDecoration: 'none' }}
              >
                Projects
              </Typography>
              <Typography
                href="blog"
                component={Link}
                to="/blog"
                style={{ textDecoration: 'none' }}
              >
                Blog
              </Typography>
              <Typography
                href="contact"
                component={Link}
                to="/contact"
                style={{ textDecoration: 'none' }}
              >
                Contact
              </Typography>
            </Box>
          ) : (
            ''
          )}

          {/*<IconButton
            onClick={toggleDarkMode}
            variant="contained"
            color="primary"
            sx={{
              height: '30px',
              width: '30px',
              padding: '10px',
              color: '#282c34',
            }}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>*/}
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
              height: '30px',
              paddingLeft: '10px',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => setShow(!show)}
              className="menu-btn"
              variant="contained"
              color="primary"
              sx={{ alignItems: 'center' }}
            >
              {show ? <FaTimes /> : <FiMenu />}
            </Button>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
