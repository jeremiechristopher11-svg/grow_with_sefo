import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import Host from './pages/Host';
import FasAFas from './pages/FasAFas';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Subscribe from './pages/Subscribe';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/animatrice" element={<Host />} />
          <Route path="/fas-a-fas" element={<FasAFas />} />
          <Route path="/evenements" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
