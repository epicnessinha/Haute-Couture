import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { NewTendencies } from './pages/NewTendencies';
import { LooksOfTheMonth } from './pages/LooksOfTheMonth';
import { Designers } from './pages/Designers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-tendencies" element={<NewTendencies />} />
        <Route path="/looks-of-the-month" element={<LooksOfTheMonth />} />
        <Route path="/designers" element={<Designers />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
