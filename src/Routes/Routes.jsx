import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Topbar } from '../components/Topbar';
import { StatusPage } from "./StatusPage";
import { Home } from './Home';

export function RoutesController() {
  return (
    <React.Fragment>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/statuspage' element={<StatusPage />} />
      </Routes>
    </React.Fragment>
  )
}