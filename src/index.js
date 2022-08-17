import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import './index.css';
import Home from './pages/Home';
import StoreDetail from './pages/StoreDetail';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />        
      <Route path="storedetail/:id" element={<StoreDetail />} />  
      <Route path="*" element={<Home />} />            
    </Routes>
    </Wrapper>
  </BrowserRouter>
);