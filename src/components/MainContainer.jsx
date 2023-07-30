import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import Blue from './blue';
import Red from './red';
import Green from './Green';
import Yellow from './Yellow';


function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/yellow" element={<Yellow />} />
      </Routes>
    </div>
  );
}

export default MainContainer;
