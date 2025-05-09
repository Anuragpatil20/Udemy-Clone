import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import CourseListing from './Component/CourseListing';
import { Route, Routes } from 'react-router-dom';
import CardListPage from './Component/CardListPage';



function App() {
  return (
    <div>
      <Navbar />
      
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:categorySlug" element={<CourseListing />} />
      <Route path="/card" element={<CardListPage/>} />
      </Routes>
     
      
    </div>
  );
}

export default App;
