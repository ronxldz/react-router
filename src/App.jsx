import React from 'react';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="container">
        <h1></h1>
        <Navbar />
        <MainContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
