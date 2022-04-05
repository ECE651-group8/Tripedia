import React from "react";

import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trips from "./components/pages/Trips";
import Display from "./components/pages/Display";
import SignUp from "./components/pages/SignUp";
import Detail from "./components/pages/Detail";
import Timeline from "./components/pages/Timeline";
import UploadNew from "./components/pages/UploadNew";
import Search from "./components/pages/Search";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/display" element={<Display />} />
          <Route path="/trips/:id" element={<Trips />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/timeline/:id" element={<Timeline />} />
          <Route path="/upload" element={<UploadNew />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
