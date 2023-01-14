import React, { useState, useEffect } from 'react';
import SanityClient from '../../client';
import {
  Button,
  //Card,
  //CardActions,
  //CardContent,
  // CardMedia,
  Grid,
  Typography,
  Box,
  //Stack,
} from '@mui/material';
import { Facebook, GitHub } from '@mui/icons-material';
import { Container } from '@mui/system';

function About() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == 'about']{
      title,
      _id,
      image{
        asset->{
            _id,
            url
        }
    }

    }`
    )
      .then((data) => setAboutData(data))

      .catch(console.error);
  }, []);
  if (!aboutData) return 'Loading.....';
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
      >
        About Me
      </Typography>
      {aboutData &&
        aboutData.map((about, id) => (
          <Box
            sx={{
              display: 'flex',
              margin: '10px',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: 1,
              textDecoration: 'none',
            }}
          >
            <Box
              sx={{
                flex: '50%',
              }}
            >
              <Typography variant="body2">{about.title},</Typography>
            </Box>
            <Box sx={{ flex: '50%' }}>
              <img
                src={about.image.asset.url}
                alt={about.title}
                style={{
                  height: '40vh',
                  width: '140px',
                  alignItems: 'center',
                  marginLeft: '170px',
                }}
              />
            </Box>
          </Box>
        ))}
    </>
  );
}

export default About;
