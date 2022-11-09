import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { App } from './App';
import { Menu } from './Components/Menu/Menu';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Chamado } from './Tamplates/Atendente/Chamado/Chamado';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Chamado />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
