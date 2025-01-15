import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Modal, Box, Button, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = ({ handleDrawerToggle, onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      onSearch(searchText);
      navigate(`/search?query=${encodeURIComponent(searchText)}`);
    }
  };

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#003049' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" style={{ color: '#FFFFFF' }}>
          Policy Explained
        </Typography>

        {/* Right Section: Search Bar and Sign-in/Sign-up */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Search Bar */}
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search the site..."
              style={{ backgroundColor: '#fff', borderRadius: '5px' }}
            />
            <Button type="submit" variant="contained" style={{ marginLeft: '10px' }}>
              Search
            </Button>
          </form>

          {/* Sign-in/Sign-up Button */}
          <Button variant="outlined" color="inherit" onClick={toggleModal}>
            Sign In / Sign Up
          </Button>
        </div>
      </Toolbar>

      {/* Modal for Sign-in/Sign-up */}
      <Modal open={modalOpen} onClose={toggleModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px',
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Sign In / Sign Up</h2>
          <form>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" fullWidth>
              Sign In
            </Button>
            <Button variant="outlined" fullWidth style={{ marginTop: '10px' }}>
              Sign Up
            </Button>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              style={{ marginTop: '10px' }}
            >
              Sign In with Google
            </Button>
          </form>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Header;

