import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";

import Dashboard from "./Dashboard";

import Catalogue from "./Catalogue";

import Setting from "./Setting";

import FormCatalogue from "./FormCatalogue";

import Footer from "./Footer";

import { useSelector, useDispatch } from "react-redux";

function RightContent(props) {
  const _data = useSelector((state) => state?.catalogue?.Data) || [];

  const _action = useSelector((state) => state?.catalogue?.Action) || "";

  useEffect(() => {
    // alert("Catalogue = " + _action);
  }, [_action]);

  console.log("Settings", _data, _action);

  return (
    <div
      style={{
        borderLeft: "2px solid #fafafa",
        paddingLeft: 16,
        height: "100%",
      }}
    >
      <Header />
      <Routes>
        <Route
          path="/addCatalogue/:type"
          element={<FormCatalogue action="add" />}
        />
        <Route
          path="/editCatalogue/:id"
          element={<FormCatalogue action="edit" />}
        />
        <Route path="/food" element={<Catalogue type="food" />} />
        <Route path="/drink" element={<Catalogue type="drink" />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/" index element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default RightContent;
