import { Box, IconButton, Slider, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useState } from 'react';

const PlayerBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '90px',
        backgroundColor: '#181818',
        borderTop: '1px solid #282828',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: 2,
      }}
    >
      {/* Left section - Song info */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '30%' }}>
        <img
          src="https://i.scdn.co/image/ab67616d00004851c8a11e48c91a982d086afc69"
          alt="Album cover"
          style={{ width: '56px', height: '56px' }}
        />
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'white' }}>
            Song Name
          </Typography>
          <Typography variant="caption" sx={{ color: '#b3b3b3' }}>
            Artist Name
          </Typography>
        </Box>
      </Box>

      {/* Center section - Player controls */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <IconButton sx={{ color: '#b3b3b3' }}>
            <ShuffleIcon />
          </IconButton>
          <IconButton sx={{ color: '#b3b3b3' }}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: '#e6e6e6',
              },
            }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton sx={{ color: '#b3b3b3' }}>
            <SkipNextIcon />
          </IconButton>
          <IconButton sx={{ color: '#b3b3b3' }}>
            <RepeatIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
          <Typography variant="caption" sx={{ color: '#b3b3b3' }}>
            {formatTime(0)}
          </Typography>
          <Slider
            size="small"
            sx={{
              color: '#b3b3b3',
              '& .MuiSlider-thumb': {
                width: 12,
                height: 12,
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.16)',
                },
              },
            }}
          />
          <Typography variant="caption" sx={{ color: '#b3b3b3' }}>
            {formatTime(180)}
          </Typography>
        </Box>
      </Box>

      {/* Right section - Volume control */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '30%', justifyContent: 'flex-end' }}>
        <VolumeUpIcon sx={{ color: '#b3b3b3' }} />
        <Slider
          size="small"
          value={volume}
          onChange={(_, value) => setVolume(value)}
          sx={{
            width: '100px',
            color: '#b3b3b3',
            '& .MuiSlider-thumb': {
              width: 12,
              height: 12,
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.16)',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PlayerBar; 