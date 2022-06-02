import './App.css';
import React from 'react';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Story from './components/Story';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Roadmap' element={<Roadmap />} />
          <Route path='/Story' element={<Story />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
