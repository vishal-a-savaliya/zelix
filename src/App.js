import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Home from './views/Home';
import Contact from './views/Contact';

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <Header />

      <Routes>

        <Route path="/" element={<Home />}>

        </Route>

        <Route path="/contact" element={<Contact />}>

        </Route>

      </Routes>

      <Footer />

    </>
  );
}

export default App;
