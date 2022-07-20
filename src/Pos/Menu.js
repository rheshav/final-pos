import React, { useState, useEffect } from 'react';
import './Menu.css';

function Menu(props) {
  const menuList = [
    {
      name: 'Dashboard',
      icon: '',
      onClick: () => alert('dashboard'),
    },
    {
      name: 'Food',
      icon: '',
      onClick: () => alert('food'),
    },
    {
      name: 'Drinks',
      icon: '',
      onClick: () => alert('drinks'),
    },
    {
      name: 'Settings',
      icon: '',
      onClick: () => alert('settings'),
    },
  ];

  return (
    <div>
      {menuList.map((value, key) => {
        // console.log('value', value, key);
        const label = key + 1 + ' - ' + value?.name;
        return (
          <div className={'menuItem'}>
            <a onClick={value?.onClick}>{label}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
