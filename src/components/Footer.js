import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import Toolbar from '@mui/material/Toolbar';

export default function Footer() {
  return (
    <>
    <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 1 }}>
      {'Made by '}
      <MuiLink color="inherit" href="https://github.com/saffronrust/VerityCompanion">
        saffronrust
      </MuiLink>
      {' '}
      <GitHubIcon />
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
      {'Powered by '}
      <MuiLink color="inherit" href="https://mui.com/">
        Material-UI
      </MuiLink>
      {' and '}
      <MuiLink color="inherit" href="https://nextjs.org/">
        Next.js
      </MuiLink>
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
        {'Verity Solver Algorithm by '}
        <MuiLink color="inherit" href="https://www.reddit.com/r/raidsecrets/comments/1dbua5g/made_a_python_script_to_solve_outside_excise/">
            u/swegmesterflex
        </MuiLink>
    </Typography>
    </>
  );
}