import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Sidebar = () => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Search', icon: <SearchIcon /> },
    { text: 'Your Library', icon: <LibraryMusicIcon /> },
  ];

  const playlistItems = [
    { text: 'Create Playlist', icon: <AddBoxIcon /> },
    { text: 'Liked Songs', icon: <FavoriteIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white',
        padding: 2,
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
      <List>
        {playlistItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar; 