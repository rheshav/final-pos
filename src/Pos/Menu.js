import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faChartLine, faBowlFood, faGear } from '@fortawesome/free-solid-svg-icons';
function Menu(props) {
  const menuList = [
    {
      name: 'Dashboard',
      icon: faChartLine,
      // onClick: () => alert('dashboard'),
      path: '',
    },
    {
      name: 'Food',
      icon: faBowlFood,
      // onClick: () => alert('food'),
      path: 'food',
    },
    {
      name: 'Drink',
      icon: faCoffee,
      // onClick: () => alert('drinks'),
      path: 'drink',
    },
    {
      name: 'Settings',
      icon: faGear,
      // onClick: () => alert('settings'),
      path: 'settings',
    },
  ];

  let location = useLocation();
  console.log('location', location);

  return (
    <div>
      {menuList.map((value, key) => {
        // console.log('value', value, key);
        const label = value?.name;
        const path = value?.path;
        const isActive = location?.pathname === '/' + path;
        return (
          <div className={'menuItem ' + (isActive ? 'active' : '')}>
            <Link to={path}>
              <FontAwesomeIcon icon={value?.icon} style={{ marginRight: 16 }} />
              {label}
            </Link>
            {/* <a onClick={value?.onClick}>{label}</a> */}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
