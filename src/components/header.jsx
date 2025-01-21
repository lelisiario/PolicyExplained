import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Modal, Box, Button, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase'; // Firebase import configuration

const Header = ({ handleDrawerToggle, onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Toggle the modal
  const toggleModal = () => setModalOpen(!modalOpen);

  // Handle the search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      onSearch(searchText);
      navigate(`/search?query=${encodeURIComponent(searchText)}`);
    }
  };

  // Handle Google Sign In
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Google Sign-In Successful:', result.user);
        toggleModal(); // Close modal after successful login
      })
      .catch((error) => {
        console.error('Error during Google Sign-In:', error.message);
      });
  };

  // Handle Manual Sign Up
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('User Signed Up Successfully:', result.user);
        toggleModal(); // Close modal after successful sign-up
      })
      .catch((error) => {
        console.error('Error during Sign-Up:', error.message);
      });
  };

  // Handle Manual Sign In
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('User Signed In Successfully:', result.user);
        toggleModal(); // Close modal after successful sign-in
      })
      .catch((error) => {
        console.error('Error during Sign-In:', error.message);
      });
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#003049' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Sidebar Toggle Button */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        {/* Site Title */}
        <Typography variant="h6" style={{ color: '#FFFFFF' }}>
          Policy Explained
        </Typography>

        {/* Search Bar and Sign-In/Sign-Up */}
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

          {/* Sign-In/Sign-Up Button */}
          <Button variant="outlined" color="inherit" onClick={toggleModal}>
            Sign In / Sign Up
          </Button>
        </div>
      </Toolbar>

      {/* Modal for Sign-In/Sign-Up */}
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
            {/* Email Input */}
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Input */}
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Manual Sign-In Button */}
            <Button
              type="button"
              variant="contained"
              fullWidth
              onClick={handleSignIn}
              style={{ marginTop: '10px' }}
            >
              Sign In
            </Button>

            {/* Manual Sign-Up Button */}
            <Button
              type="button"
              variant="outlined"
              fullWidth
              onClick={handleSignUp}
              style={{ marginTop: '10px' }}
            >
              Sign Up
            </Button>

            {/* Google Sign-In Button */}
            <Button
              type="button"
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleGoogleLogin}
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


