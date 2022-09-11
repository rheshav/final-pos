import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import Menu from "./Menu";

function SideBar(props) {
  return (
    <div>
      <Logo />
      <Menu />
      <Profile />
    </div>
  );
}

export default SideBar;
