import React, { useEffect, useState } from "react";

import LogoImg from "../assets/logo.png";

function Logo(props) {
  return (
    <div align="center" style={{ marginBottom: 10 }}>
      <img src={LogoImg} style={{ width: 48 }} />
    </div>
  );
}

export default Logo;
