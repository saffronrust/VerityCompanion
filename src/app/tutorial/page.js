'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@mui/material/Card';

export default function Tutorial() {
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
          <Typography variant="h3" component="h1" sx={{ mt: 5, mb: 1 }}>
            Tutorial
          </Typography>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.1rem',
              alignItems: 'center',
              minWidth: '350px',
              mb: 2
            }}
          >
            <Typography variant="h4" component="h1" sx={{ my: 1 }}>
              How To Use Verity Companion
            </Typography>
            <Typography variant="h5" component="h1" sx={{ my: 1 }}>
              Outside Solver
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              1. Input the inside shapes according to the callouts, from left to right.
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              2. Input the outside shapes according to what you see, from left to right.
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              3. Follow the instructions and execute the swaps from top to bottom.
            </Typography>
            <Typography variant="h5" component="h1" sx={{ my: 1 }}>
                Inside Guide
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              1. Input the shape that your statue is holding.
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              2. Follow the step-by-step instructions.
            </Typography>
          </Card>
          <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.1rem',
                alignItems: 'center',
                minWidth: '350px',
            }}
          >
            <Typography variant="h4" component="h1" sx={{ my: 1 }}>
              Tips & Tricks for Verity
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              1. The two nearest guardians to the front of the room will always be teleported to the inside rooms.
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              2. Your helmet is typically the most unique part of the statue. Make sure it stands out!
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              3. When outside is completed, leave the adds alive. You wouldn't want to spawn two unstoppable ogres for nothing.
            </Typography>
            <Typography variant="body1" component="h1" sx={{ my: 1 }}>
              4. Most importantly, keep a cool head! Even if you mess up the shapes, you can still recover.
            </Typography>
          </Card>
          <Footer />
        </Box>
    </Container>
  );
}