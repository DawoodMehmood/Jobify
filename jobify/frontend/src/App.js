import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Grid from './components/Grid';
import AboutSection from './components/AboutSection'
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Grid />
        <AboutSection />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

