import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Characters from "../Characters";
import Home from "../Home";

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
