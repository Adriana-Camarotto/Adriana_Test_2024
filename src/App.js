import React from 'react';
import './globals.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './app/home/page';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}


