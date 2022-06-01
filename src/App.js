import './App.css';
import React from 'react';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Tokenomics from './components/Tokenomics';
import Whitepaper from './components/Whitepaper';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Roadmap' element={<Roadmap />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Tokenomics' element={<Tokenomics />} />
          <Route path='/Whitepaper' element={<Whitepaper />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
