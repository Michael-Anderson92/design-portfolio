import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <Toolbar>
          {/* NeuralShield Logo */}
          <img src="/media/NeuralShieldIcon.png" alt="NeuralShield Logo" style={{ width: 40, height: 40, marginRight: 10 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'rgb(199, 215, 220)' }}>
  NeuralShield
</Typography>

          <Button color="inherit" sx={{ color: 'rgb(199, 215, 220)' }}>Solutions</Button>
          <Button color="inherit" sx={{ color: 'rgb(199, 215, 220)' }}>Threat Intelligence</Button>
          <Button color="inherit" sx={{ color: 'rgb(199, 215, 220)' }}>Contact</Button>
          <Button color="inherit" sx={{ color: 'rgb(199, 215, 220)' }}>About us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}