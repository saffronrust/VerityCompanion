import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import Tetrahedron from '@/images/tetrahedron.png';
import Image from 'next/image'

export default function Home() {
  let selected = false;
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Verity Solver
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page, remember to do an app bar above and a footer below
        </Link>
        <Image
          src={Tetrahedron}
          alt="Tetrahedron" 
          width="50" 
          height="50" 
          style={
            {
              filter: selected ? 'invert(0)' : 'invert(0.3)',
          }
        }
          />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
