import React from 'react';

import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cw1' element={<Ex1 />} />
          <Route path='/cw2' element={<Ex2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
