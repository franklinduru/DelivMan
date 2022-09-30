import React from 'react'
import Data from './components/data/Data';
import Navbar from './components/navbar/Navbar';
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer';
import Recovery from './components/recovery/Recovery';

function App() {
  return (
    <>
      <Navbar />
      <Recovery />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;
