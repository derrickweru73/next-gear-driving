import React from "react";
import Navbar from "./components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentDashboard from "./pages/StudentDashboard";
import Home from "./pages/Home";
 
function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={
          <ProtectedRoute>
             < StudentDashboard/>
        </ProtectedRoute>
        } />
       
        
      </Routes>
     </>
  );
}

export default App;
