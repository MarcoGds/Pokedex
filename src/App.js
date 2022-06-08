import React from 'react';

import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import { RoutesController } from './Routes/Routes';


function App() {

  return (
    <BrowserRouter>
      <RoutesController />
    </BrowserRouter>
  );
}

export default App;
