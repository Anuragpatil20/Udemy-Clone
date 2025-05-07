import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import CourseListing from './Component/CourseListing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      
      <Routes>
      <Route path="/courses/:categorySlug" element={<CourseListing />} />
      </Routes>
     
      
    </div>
  );
}

export default App;
