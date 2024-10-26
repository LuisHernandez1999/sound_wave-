import { Box, Typography } from '@mui/material';    
import Header from './components/Header';
import Player from './components/Player';
import Head from 'next/head'; // Importando o Head do Next.js

export default function Home() {
  const artists = [
    { name: "The Cranberries", image: "https://akamai.sscdn.co/letras/360x360/albuns/1/8/4/b/2263301718718755.jpg" },
    { name: "Stone Temple Pilots", image: "https://i.pinimg.com/originals/c1/77/ff/c177fff6449561550951e336a72f63dd.jpg" },
    { name: "Pearl Jam", image: "https://i.pinimg.com/originals/49/8a/56/498a5647337ebf5e18a1f6ed5143d9c2.png" },
  ];

  return (
    <>
      <Head>
        {/* Adicionando o link da fonte Antic Slab */}
        <link href="https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap" rel="stylesheet" />
      </Head>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', bgcolor: '#f9f9f9' }}> {/* Cor de fundo alterada */}
        <Header />
        <Box sx={{ mt: 4, width: 400, minHeight: '300px', p: 3, borderRadius: 4, boxShadow: 3, bgcolor: '#fff' }}> {/* Aumentando a altura do Player */}
          <Player />
        </Box>
        <Typography 
          variant="h4" 
          sx={{ mt: 7, fontFamily: 'Antic Slab, sans-serif', fontWeight: 400 }}
        >
          Artistas
        </Typography>
        
        {/* Container para os artistas */}
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 2 }}>
          {artists.map((artist, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
              <img 
                src={artist.image} 
                alt={artist.name} 
                style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '10px' }} // Arredondar a imagem
              />
              <Typography variant="h6" sx={{ fontFamily: 'Antic Slab, sans-serif', fontWeight: 400 }}>
                {artist.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
