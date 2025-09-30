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
  User, // Import the User type from firebase/auth
} from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase configuration

// --- START: PROFESSIONAL TYPESCRIPT FIX ---

// Define the types for the props this component receives
interface HeaderProps {
  handleDrawerToggle: () => void;
  onSearch: (query: string) => void;
}

// Apply the interface to the component function
const Header: React.FC<HeaderProps> = ({ handleDrawerToggle, onSearch }) => {
// --- END: PROFESSIONAL TYPESCRIPT FIX ---

  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null); // Use the imported User type
  const navigate = useNavigate();

  // Listen for authentication state changes
  useEffect(() => {
    // The onAuthStateChanged function returns a Firebase User object or null.
    // TypeScript handles this correctly now that we typed the 'user' state above.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; // Cleanup listener when component unmounts
  }, []);

  // Handle Google Sign In
  const handleGoogleLogin = async () => {
    // ... (rest of the Google login logic remains the same)
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toggleModal();
    } catch (error) {
      console.error("Google Sign-In Error:", error); // Log the full error object
    }
  };

  // Handle Manual Sign Up
  const handleSignUp = async () => {
    // ... (logic remains the same)
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toggleModal();
    } catch (error) {
      console.error("Sign-Up Error:", error);
    }
  };

  // Handle Manual Sign In
  const handleSignIn = async () => {
    // ... (logic remains the same)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toggleModal();
    } catch (error) {
      console.error("Sign-In Error:", error);
    }
  };

  // Handle Sign Out
  const handleLogout = async () => {
    // ... (logic remains the same)
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  // Toggle the modal
  const toggleModal = () => setModalOpen(!modalOpen);

  // Handle search functionality
  const handleSearch = (e: React.FormEvent) => { // Type the event as React.FormEvent
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

        {/* Right Section: Search Bar and Sign-In/Sign-Out */}
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

          {/* Show user info when logged in */}
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