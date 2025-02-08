import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Modal, Box, Button, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase configuration

const Header = ({ handleDrawerToggle, onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // Track authenticated user
  const navigate = useNavigate();

  // ✅ Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; // Cleanup listener when component unmounts
  }, []);

  // ✅ Handle Google Sign In
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toggleModal(); // Close modal after successful login
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  // ✅ Handle Manual Sign Up
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toggleModal();
    } catch (error) {
      console.error("Sign-Up Error:", error.message);
    }
  };

  // ✅ Handle Manual Sign In
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toggleModal();
    } catch (error) {
      console.error("Sign-In Error:", error.message);
    }
  };

  // ✅ Handle Sign Out
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state on logout
    } catch (error) {
      console.error("Sign-Out Error:", error.message);
    }
  };

  // ✅ Toggle the modal
  const toggleModal = () => setModalOpen(!modalOpen);

  // ✅ Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      onSearch(searchText);
      navigate(`/search?query=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#003049" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" style={{ color: "#FFFFFF" }}>Policy Explained</Typography>

        {/* ✅ Right Section: Search Bar and Sign-In/Sign-Out */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Search Bar */}
          <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant="outlined"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search the site..."
              style={{ backgroundColor: "#fff", borderRadius: "5px" }}
            />
            <Button type="submit" variant="contained" style={{ marginLeft: "10px" }}>Search</Button>
          </form>

          {/* ✅ Show user info when logged in */}
          {user ? (
            <div>
              <Typography variant="body1" style={{ color: "#FFFFFF", marginRight: "10px" }}>
                Welcome, {user.displayName || user.email}
              </Typography>
              <Button variant="outlined" color="inherit" onClick={handleLogout}>Sign Out</Button>
            </div>
          ) : (
            <Button variant="outlined" color="inherit" onClick={toggleModal}>Sign In / Sign Up</Button>
          )}
        </div>
      </Toolbar>

      {/* Modal for Sign-In/Sign-Up */}
      <Modal open={modalOpen} onClose={toggleModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Sign In / Sign Up</h2>
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

            {/* Sign-In and Sign-Up Buttons */}
            <Button type="button" variant="contained" fullWidth onClick={handleSignIn} style={{ marginTop: "10px" }}>
              Sign In
            </Button>
            <Button type="button" variant="outlined" fullWidth onClick={handleSignUp} style={{ marginTop: "10px" }}>
              Sign Up
            </Button>

            {/* Google Sign-In Button */}
            <Button type="button" variant="contained" color="secondary" fullWidth onClick={handleGoogleLogin} style={{ marginTop: "10px" }}>
              Sign In with Google
            </Button>
          </form>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Header;



