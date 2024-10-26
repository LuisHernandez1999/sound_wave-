import { Box, Typography, Button, TextField } from '@mui/material'; 
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';

export default function Player() {
  const songs = [
    { title: "Linger - The Cranberries" },
    { title: "Plush - Stone Temple Pilots" },
    { title: "Alive - Pearl Jam" },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar as músicas com base no termo de busca
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          sx={{
            bgcolor: '#fff', // Estilo para o campo de busca
            borderRadius: '20px', // Arredondar bordas
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px', // Arredondar bordas do input
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc', // Cor da borda
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#888', // Cor da borda ao passar o mouse
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#007bff', // Cor da borda quando focado
            },
          }}
        />
      </Box>
      {filteredSongs.map((song, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', bgcolor: '#555', borderRadius: 2, my: 1, p: 1, color: '#fff' }}>
          <Button sx={{ minWidth: 'auto', color: '#fff' }}>
            <PlayArrowIcon />
          </Button>
          <Typography variant="body1" sx={{ ml: 2 }}>{song.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}
