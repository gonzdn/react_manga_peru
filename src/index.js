import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate
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
      <Route path="/tiendas_manga_peru" element={<Home />} />
      {/* <Route path="/" element={<Home />} /> -- Solo en local*/}
      <Route path="/tiendas_manga_peru/:storedetail/:id" element={<StoreDetail />} />
      {/* <Route path="/:storedetail/:id" element={<StoreDetail />} /> -- Solo en local*/}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Wrapper>
  </BrowserRouter>
);