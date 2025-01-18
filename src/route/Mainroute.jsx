import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component
import Mainlayout from "../layout/Manlayout"
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";

function Mainroute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainroute;
