import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Home from './views/Home';
import Contact from './views/Contact';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './views/About';

function App() {

  const location = useLocation();

  return (
    <>

      <Header />

      <AnimatePresence>

        <Routes location={location} key={location.key}>

          <Route path="/" element={<Home />}>

          </Route>

          <Route path="/contact" element={<Contact />}>

          </Route>

          <Route path="/about" element={<About />} />

        </Routes>

      </AnimatePresence>

      <Footer />

    </>
  );
}

export default App;
