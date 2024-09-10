import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import Sidebar from '../styles/sidebar.css'; --Separate file import for sidebar styles.

const Sidebar = ({ isOpen, handleDrawerToggle }) => {
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
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Legislation" />
        </ListItem>

        <ListItem button onClick={handleOfficialsClick}>
          <ListItemText primary="Elected Officials" />
          {openOfficials ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openOfficials} timeout="auto" unmountOnExit>
        <list component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="House of Representatives" />
          </ListItem>
          <ListItem button>
          <ListItemText primary="Senators" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="President" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Vice President" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="SCOTUS" />
            </ListItem>
        </list>
        </Collapse>
        <ListItem button>
          <ListItemText primary="Educational Resources" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;