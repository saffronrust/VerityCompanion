import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

export default function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Verity Companion
            </Typography>
          <Button color='inherit'>
            <Link href="/" color="inherit" underline="none">
              Outside
            </Link>
          </Button>
          <Button color='inherit'>
            <Link href="/inside" color="inherit" underline="none">
              Inside
            </Link>
          </Button>
          <Button color='inherit'>
            <Link href="/tutorial" color="inherit" underline="none">
              Tutorial
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}