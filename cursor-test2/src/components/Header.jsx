import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 1 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="forward"
            sx={{ mr: 1 }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        <Box 
          sx={{ 
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isSearchOpen ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '0 10px',
                width: '300px',
              }}
            >
              <SearchIcon sx={{ color: 'black' }} />
              <input
                type="text"
                placeholder="What do you want to play?"
                style={{
                  border: 'none',
                  outline: 'none',
                  padding: '8px',
                  width: '100%',
                  backgroundColor: 'transparent',
                }}
              />
            </Box>
          ) : (
            <Button
              onClick={() => setIsSearchOpen(true)}
              sx={{
                color: 'white',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <SearchIcon sx={{ mr: 1 }} />
              What do you want to play?
            </Button>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#e6e6e6',
              },
            }}
          >
            Upgrade
          </Button>
          <IconButton
            color="inherit"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 