import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import Home from './pages/Home';
import StoreDetail from './pages/StoreDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />        
      <Route path="storedetail/:id" element={<StoreDetail />} />  
      <Route path="*" element={<Home />} />            
    </Routes>
  </BrowserRouter>
);