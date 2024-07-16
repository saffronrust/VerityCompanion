"use client";

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@mui/material/Button';

export default function Cosmetics() {

    const Destiny2API = require('node-destiny-2');

    const destiny = new Destiny2API({
        key: 'd0eae44378984ff996fd99b41d757631',
        oauthConfg: {
            id: '47807',
            secret: 'Lgqq3LzAMK1swMgi-jzEQzBjXqWGHHgXDHUf3y2OMwA'
        }
    });
    
    function Test() {
    destiny.searchDestinyPlayer(3, 'Zephyrus')
    .then(res => {
        const data = res.Response;
        console.log(data);
        console.log('\n\n');
    })
    .catch(err => {
        console.error(`searchPlayer Error: ${err}`);
    });
    }

  return (
    <Container maxWidth="xl">
        <Header />
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        <Typography variant="h4" component="h1" sx={{ mt: 5 }}>
            Team Cosmetics
        </Typography>
        <Button
            onClick={() => Test()}
        >
            Click Me
        </Button>
        </Box>
        <Footer />
    </Container>
  );
}