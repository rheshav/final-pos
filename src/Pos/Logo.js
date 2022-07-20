import React, { useState, useEffect } from 'react';
import LogoImg from '../assets/food-logo.png';

function Logo(props) {
  return (
    <div align="center" style={{ marginTop: 10, marginBottom: 10 }}>
      <img src={LogoImg} style={{ width: 48 }} />
    </div>
  );
}

export default Logo;
