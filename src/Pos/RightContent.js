import React, { useState, useEffect } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

function RightContent(props) {
  return (
    <div>
      <p>RightContent</p>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default RightContent;
