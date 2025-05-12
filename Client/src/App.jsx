import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import CourseListing from './Component/CourseListing';
import CardListPage from './Component/CardListPage';
import WishlistPage from './pages/WishlistPage';
import { WishlistProvider } from './Component/WishlistContext'; // Adjust path if needed
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <WishlistProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:categorySlug" element={<CourseListing />} />
          <Route path="/card" element={<CardListPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
      <ToastContainer />
    </WishlistProvider>
  );
}

export default App;
