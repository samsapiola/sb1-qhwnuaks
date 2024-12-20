import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TextEditor from './components/TextEditor';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<TextEditor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;