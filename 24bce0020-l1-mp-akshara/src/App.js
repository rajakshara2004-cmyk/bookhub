import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar_24bce0020_l1_akshara';
import Home from './pages/Home_24bce0020_l1_mp_akshara';
import Sell from './pages/Sell_24bce0020_l1_mp_akshara';
import Buy from './pages/Buy_24bce0020_l1_mp_akshara';
import Rent from './pages/Rent_24bce0020_l1_mp_akshara';
import Portfolio from './pages/Portfolio_24bce0020_l1_mp_akshara';

// Project: BookSwap Hub
// Student: Akshara Raj | Reg No: 24BCE0020 | Lab: L1
// File: 24BCE0020_L1_MP_AKSHARA

const AKSHARARAJ_24BCE0020_App = () => {

  // Shared listings — added from Sell, shown in Buy & Rent
  const [bookListings_24BCE0020, setBookListings_24BCE0020] = useState([]);

  const addBook_24BCE0020 = (newBook) => {
    setBookListings_24BCE0020(prev => [newBook, ...prev]);
  };

  return (
    <Router>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={
            <Sell
              addBook_24BCE0020={addBook_24BCE0020}
              bookListings_24BCE0020={bookListings_24BCE0020}
            />
          } />
          <Route path="/buy" element={
            <Buy bookListings_24BCE0020={bookListings_24BCE0020} />
          } />
          <Route path="/rent" element={
            <Rent bookListings_24BCE0020={bookListings_24BCE0020} />
          } />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AKSHARARAJ_24BCE0020_App;
