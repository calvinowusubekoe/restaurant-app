import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden'
      }
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" width="100%" minHeight="100vh" overflowX="hidden">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Menu />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
        </motion.div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
