import React from "react";

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

// Component
import Mainlayout from "../layout/Manlayout"
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Task from "../components/Task/Task";

function Mainroute() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="task/:taskID" element={<Task />}>
            
          </Route>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </HashRouter>
  );
}

export default Mainroute;
