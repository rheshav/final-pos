import React, { useEffect, useState } from "react";
import "./Menu.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faChartLine,
  faHamburger,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function Menu(props) {
  const menuList = [
    { name: "Dashboard", icon: faChartLine, path: "" },
    { name: "Food", icon: faHamburger, path: "food" },
    { name: "Drink", icon: faCoffee, path: "drink" },
    {
      name: "Settings",
      icon: faCog,
      path: "settings",
    },
  ];

  let location = useLocation();

  return (
    <div>
      {menuList.map((value, key) => {
        // console.log("value", value, key);
        const label = value?.name; //null safe
        const path = value?.path;
        const isActive = location?.pathname === "/" + path;
        return (
          <Link to={path}>
            <div className={"menuItem " + (isActive ? "active" : "")}>
              <FontAwesomeIcon icon={value?.icon} style={{ marginRight: 16 }} />
              {label}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;
