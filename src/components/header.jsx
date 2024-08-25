import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const Header = ({ handleDrawerToggle }) => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#003049' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ color: '#FFFFFF' }}>
          Policy Explained
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
