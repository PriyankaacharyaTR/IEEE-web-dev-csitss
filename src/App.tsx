import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Committee } from './pages/Committee';
import { Speakers } from './pages/Speakers';
import { CallForPapers } from './pages/CallForPapers';
import { Awards } from './pages/Awards';
import { Registration } from './pages/Registration';
import { Sponsors } from './pages/Sponsors';
import { Tracks } from './pages/Tracks';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;