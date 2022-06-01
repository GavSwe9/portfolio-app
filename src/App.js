import './App.css';
import React from 'react'
import { Routes } from './Components/Routes';
import { NamePlate } from './Components/NamePlate';

function App() {
  return (
    <React.Fragment>
      <NamePlate />
      <Routes />
    </React.Fragment>
  );
}

export default App;
