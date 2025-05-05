import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const CardList = () => {
  const cards = [
    {
      title: 'Today\'s Top Hits',
      description: 'Taylor Swift is on top of the Hottest 50!',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
    },
    {
      title: 'RapCaviar',
      description: 'New music from Drake, Kendrick Lamar and more',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
    },
    {
      title: 'All Out 2010s',
      description: 'The biggest songs of the 2010s',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
    },
    {
      title: 'Rock Classics',
      description: 'Rock legends & epic songs that continue to inspire',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
        Good afternoon
      </Typography>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                backgroundColor: '#181818',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#282828',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#b3b3b3' }}>
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