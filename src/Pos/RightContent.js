import React, { useState, useEffect } from 'react';
import Catalogue from './Catalogue';
import Footer from './Footer';
import Header from './Header';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Settings from './Settings';
function RightContent(props) {
  return (
    <div style={{ borderLeft: '2px solid #808080', paddingLeft: 16, height: '100%' }}>
      <Header />
      <Routes>
        <Route path="/food" element={<Catalogue type="food" />} />
        <Route path="/drink" element={<Catalogue type="drink" />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" index element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default RightContent;
