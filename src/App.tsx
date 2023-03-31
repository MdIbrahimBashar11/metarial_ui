import React from 'react';
import './App.css';
import Buttons from './component/Button';
import Typographys from './component/Typography';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/route/Navbar';
import TextFild from './component/TextFild';
import Selecet from './component/Selecet';
import Boxs from './component/sizing/Box';
import Navs from './component/Navbar/Navs';
import Date from './component/date/Date';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Buttons />} />
          <Route path="/typographys" element={<Typographys />} />
          <Route path="/textfilds" element={<TextFild />} />
          <Route path="/select" element={<Selecet />} />
          <Route path="/box" element={<Boxs />} />
          <Route path="/nav" element={<Navs />} />
          <Route path="/date" element={<Date />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
