import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CardList from './components/CardList';
import PlayerBar from './components/PlayerBar';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#121212' }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flex: 1, pb: '90px' }}>
        <Sidebar />
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <CardList />
        </Box>
      </Box>
      <PlayerBar />
    </Box>
  );
}

export default App;
