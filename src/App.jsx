import React from "react";
import Navbar from "./components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
// import { Router } from 'react-router-dom';
import Login from "./pages/Login";

function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
     </>
  );
}

export default App;
