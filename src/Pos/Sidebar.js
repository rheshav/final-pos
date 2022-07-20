import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Sidebar(props) {
  return (
    <div>
      <Logo />
      <p>Sidebar</p>
      <Menu />
    </div>
  );
}

export default Sidebar;
