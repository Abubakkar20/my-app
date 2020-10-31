import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
  <Header></Header>
  <About></About>
  <Portfolio></Portfolio>
  <Contact></Contact>
    </div>
  );
}

export default App;
