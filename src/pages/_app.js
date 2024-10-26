// pages/_app.js
import '../styles/globals.css'; // Ajuste o caminho conforme necessário

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;