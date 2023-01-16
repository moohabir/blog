import React, { useState, useEffect } from 'react';
import SanityClient from '../../client';
import { useParams, Link } from 'react-router-dom';
import BlogContent from '@sanity/block-content-to-react';
import {
  Button,
  // Card,
  //CardActions,
  //CardContent,
  //CardMedia,
  Grid,
  Typography,
  Container,
  Box,
  IconButton,
  //Box,
} from '@mui/material';
import AdSense from '../AdSense/AdSense';
//import { Facebook, GitHub } from '@mui/icons-material';

//import ImageUrlBuilder from '@sanity/image-url';

//const Builder = ImageUrlBuilder(SanityClient);
//function urlFor(source) {
// return Builder.image(source);
//}

function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    SanityClient.fetch(
      `*[slug.current == '${slug}']{
      title,
      date,
      body,
      "authorName":author->name,
      "authorImage":author->image,
        
      mainImage{
        asset->{
          _id,
          url
        }
      }
      
      
     
      
 
    }`
    )
      .then((data) => setSinglePost(data[0]))

      .catch((error) => console.error);
  }, [slug]);

  if (!singlePost) return 'Loading.....';
  console.log(singlePost);
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#fff',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Container
        sx={{
          flex: 1,

          //position: 'sticky',
          //top: '20px',
          //height: 'calc(100vh - 70px)',
          overflow: 'scroll',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Box>
          <Button>Like</Button>
          <Button>Comments</Button>
          <Button>Save</Button>
          <IconButton>
            <button>MoreIcon</button>
          </IconButton>
        </Box>
      </Container>
      <Container
        sx={{
          flex: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          border: '1px solid gray',
          borderRadius: '10px',
          marginTop: '20px',
          width: '100%',
          marginLeft: '10px',
        }}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={12}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                //alignItems: 'center',
                gap: '20',
                marginTop: '20px',
                marginRight: '0',
                marginLeft: '0',
                paddingLeft: '0',
                width: '100%',
              }}
            >
              <img
                src={singlePost?.mainImage?.asset.url}
                alt="ggg"
                style={{
                  height: '40vh',
                  width: '100%',
                  border: '1px solid gray',
                  borderRadius: '10px',
                  //alignItems: 'center',
                }}
              />

              <div
                sty={{ marginLeft: '10px', padding: '10px', marginTop: '20px' }}
              >
                <img
                  src={singlePost?.authorImage?.asset?._ref}
                  //src={singlePost?.mainImage?.asset.url}
                  alt="h"
                  style={{
                    height: '40px',
                    width: '40px',
                    border: '1px solid gray',
                    borderRadius: '50%',
                    //alignItems: 'center',
                  }}
                />
                <span>
                  <span>{singlePost.authorName}</span>
                  Posted on {new Date(singlePost.date).toLocaleDateString()}
                </span>
              </div>
            </div>

            <Typography
              variant="h2"
              sx={{}}
            >
              {singlePost.title}
            </Typography>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 'full',
                padding: '10px',
                margin: '10px',
                width: '100%',
                lineHeight: 1.6,
                fontFamily: 'Roboto',
              }}
            >
              <BlogContent
                blocks={singlePost?.body}
                projectId="process.env.REACT_APP_SANITY_STUDIO_PROJECT_ID"
                dataset="process.env.REACT_APP_SANITY_STUDIO_DATASET"
                style={{
                  display: 'flex',
                  padding: '10px',
                }}
              />
            </div>
            <div>
              <Button
                component={Link}
                to="/blog"
              >
                Share
              </Button>
              <Button
                component={Link}
                to="/blog"
              >
                Comment
              </Button>
              <Button
                component={Link}
                to="/blog"
              >
                Like
              </Button>
            </div>
            <Button
              component={Link}
              to="/blog"
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ flex: 1 }}>
        <AdSense />
      </Container>
    </Box>
  );
}

export default SinglePost;
