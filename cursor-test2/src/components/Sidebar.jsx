import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('Home');

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Search', icon: <SearchIcon /> },
    { text: 'Your Library', icon: <LibraryMusicIcon /> },
  ];

  const playlistItems = [
    { text: 'Create Playlist', icon: <AddBoxIcon /> },
    { text: 'Liked Songs', icon: <FavoriteIcon /> },
  ];

  const playlists = [
    'Discover Weekly',
    'Release Radar',
    'Chill Hits',
    'Rock Classics',
    'Indie Mix',
    'Pop Rising',
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white',
        padding: 2,
        overflowY: 'auto',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="Spotify"
          style={{ width: '120px', marginBottom: '20px' }}
        />
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            selected={selectedItem === item.text}
            onClick={() => setSelectedItem(item.text)}
            sx={{
              borderRadius: '4px',
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: selectedItem === item.text ? 'bold' : 'normal',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
      <List>
        {playlistItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              borderRadius: '4px',
              mb: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
      <Box sx={{ px: 2 }}>
        {playlists.map((playlist) => (
          <Typography
            key={playlist}
            sx={{
              color: '#b3b3b3',
              fontSize: '14px',
              mb: 1,
              cursor: 'pointer',
              '&:hover': {
                color: 'white',
              },
            }}
          >
            {playlist}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar; 