import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = ({ isOpen, handleDrawerToggle }) => {
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
        <ListItem button>
          <ListItemText primary="Elected Officials" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Educational Resources" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
