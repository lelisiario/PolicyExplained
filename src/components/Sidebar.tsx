import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// 1. FIX: Define the required types for the component's props
interface SidebarProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

const Sidebar = ({ isOpen, handleDrawerToggle }: SidebarProps) => {
  const [openOfficials, setOpenOfficials] = useState(false);

  const handleOfficialsClick = () => {
    setOpenOfficials(!openOfficials);
  };

  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      onClose={handleDrawerToggle}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#FDD686',
          color: '#252D30',
          width: '240px',
          top: '64px',
          opacity: 0.7,
        },
      }}
    >
      <List>
        <ListItem component={Link} to="/home">
          <ListItemText primary="Home" />
        </ListItem>
        {/* <ListItem button component={Link} to="/login">
          <ListItemText primary="Log In / Register" />
        </ListItem> */}
        <ListItem component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/legislation">
          <ListItemText primary="Legislation" />
        </ListItem>

        {/* 2. FIX: Added component="li" to satisfy MUI/TypeScript requirements for the clickable List Item */}
        <ListItem component="li" onClick={handleOfficialsClick}> 
          <ListItemText primary="Elected Officials" />
          {openOfficials ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openOfficials} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem component={Link} to="/house-of-representatives">
              <ListItemText primary="House of Representatives" />
            </ListItem>
            <ListItem component={Link} to="/senators">
              <ListItemText primary="Senators" />
            </ListItem>
            <ListItem component={Link} to="/president">
              <ListItemText primary="President" />
            </ListItem>
            <ListItem component={Link} to="/vice-president">
              <ListItemText primary="Vice President" />
            </ListItem>
            <ListItem component={Link} to="/scotus">
              <ListItemText primary="SCOTUS" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem component={Link} to="/educational-resources">
          <ListItemText primary="Educational Resources" />
        </ListItem>
        <ListItem component={Link} to="/interactive-map">
          <ListItemText primary="Interactive Map" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;