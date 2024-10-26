import { Box, Typography, Link } from '@mui/material';    
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <Head>
        {/* Adicionando o link da fonte Irish Grover e Raleway */}
        <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&family=Raleway:wght@200&display=swap" rel="stylesheet" />
      </Head>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2, // Padding do cabeçalho
          borderBottom: 1, // Mantém a borda
          borderColor: 'black', // Define a cor da borda como preta
          bgcolor: '#f9f9f9'  // Cor de fundo do cabeçalho
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="img" src="/logo defi.png" alt="Logo" sx={{ width: 170, height: 100, mr: 2 }} /> {/* Aumenta a margem à direita */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300, // Ajusta o peso da fonte para mais leve
              textShadow: '1px 1px 2px #000',
              color: 'black', // Cor do texto como preto
              fontFamily: 'Irish Grover, cursive', // Usando a fonte Irish Grover
              fontSize: '2.5rem', // Tamanho da fonte do cabeçalho
              mt: 7,
              ml: 1,
            }}
          >
            Sound Wave
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 12 }}> {/* Espaçamento entre os links */}
          <Link
            href="/"
            sx={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 200, // Ajusta o peso da fonte para mais leve
              fontFamily: 'Raleway, sans-serif', // Mudando para a fonte Raleway
              fontSize: '2rem', // Tamanho da fonte dos links
              mt: 7, // MarginTop apenas nos links
              textShadow: '0.3px 0.3px 1px #000', // Sombra do texto para o link HOME
            }}
          >
            HOME
          </Link>
          <Link
            href="/search"
            sx={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 200, // Ajusta o peso da fonte para mais leve
              fontFamily: 'Raleway, sans-serif', // Mudando para a fonte Raleway
              fontSize: '2rem', // Tamanho da fonte dos links
              mt: 7, // MarginTop apenas nos links
              textShadow: '0.5px 0.5px 1px #000', // Sombra do texto para o link SEARCH
            }}
          >
            SEARCH
          </Link>
        </Box>
      </Box>
    </>
  );
}
