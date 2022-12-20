import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Caracteres from "../Caracters";
import Home from "../Home";

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Caracteres />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
