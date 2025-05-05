import { Grid, Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';

const CardList = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const musicCards = [
    {
      title: 'Today\'s Top Hits',
      description: 'Taylor Swift is on top of the Hottest 50!',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'RapCaviar',
      description: 'New music from Drake, Kendrick Lamar and more',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'All Out 2010s',
      description: 'The biggest songs of the 2010s',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Rock Classics',
      description: 'Rock legends & epic songs that continue to inspire',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Chill Hits',
      description: 'Kick back to the best new and recent chill hits',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Mood Booster',
      description: 'Get happy with today\'s dose of feel-good songs!',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const showCards = [
    {
      title: 'The Joe Rogan Experience',
      description: 'Joe Rogan',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: 'PODCAST',
    },
    {
      title: 'Crime Junkie',
      description: 'audiochuck',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: 'PODCAST',
    },
    {
      title: 'TED Talks Daily',
      description: 'TED',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: 'PODCAST',
    },
    {
      title: 'The Daily',
      description: 'The New York Times',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: 'PODCAST',
    },
    {
      title: 'Call Her Daddy',
      description: 'Unwell & Alex Cooper',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: 'PODCAST',
    },
    {
      title: 'Huberman Lab',
      description: 'Scicomm Media',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: 'PODCAST',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 'bold' }}>
        Good afternoon
      </Typography>
      
      {/* Music Section */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {musicCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                backgroundColor: '#181818',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                '&:hover': {
                  backgroundColor: '#282828',
                  '& .play-button': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <IconButton
                  className="play-button"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    backgroundColor: '#1DB954',
                    color: 'black',
                    opacity: 0,
                    transform: 'translateY(8px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#1ed760',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Shows Section */}
      <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 'bold' }}>
        Shows you might like
      </Typography>
      <Grid container spacing={3}>
        {showCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              onMouseEnter={() => setHoveredCard(index + musicCards.length)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                backgroundColor: '#181818',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                '&:hover': {
                  backgroundColor: '#282828',
                  '& .play-button': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                  sx={{ borderRadius: '4px' }}
                />
                <IconButton
                  className="play-button"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    backgroundColor: '#1DB954',
                    color: 'black',
                    opacity: 0,
                    transform: 'translateY(8px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#1ed760',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              </Box>
              <CardContent>
                <Typography variant="caption" sx={{ color: '#b3b3b3', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {card.type}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardList; 