import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
//import photo from '../assets/contact.png';
import { Box, Stack, Typography } from '@mui/material';

export default function Contacts() {
  const [send, setSend] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0s5fqij',
        'template_b2ozi7e',
        form.current,
        '5EqUQWma98WcSjhz_'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Typography variant="h4">Contact Me</Typography>
      <Stack
        direction="row"
        spacing={3}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Box sx={{ flex: '50%' }}>
          <form
            className="form"
            onSubmit={sendEmail}
            ref={form}
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="email"
              required
            />
            <textarea
              placeholder="Write Massage"
              name="message"
              className="comments"
              required
            />
            <button
              type="submit"
              className="form-btn"
            >
              Send message
            </button>
            {send ? (
              <p>Your Message was sent successfully</p>
            ) : (
              <p>Please fill all of the form correctly</p>
            )}
          </form>
        </Box>
        {/* <Box sx={{ flex: '50%' }}>
          <img
            src={photo}
            alt=""
            sx={{ height: '60px', width: '60px' }}
          />
            </Box>*/}
      </Stack>
    </>
  );
}
