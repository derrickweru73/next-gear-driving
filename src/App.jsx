import TheoryLessonDetails from "./pages/TheoryLessonsDetails";
import TheoryResults from "./pages/TheoryResults";
import TheoryQuiz from "./pages/TheoryQuiz";
import TheoryLessons from "./pages/TheoryLessons";
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentDashboard from "./pages/StudentDashboard";
import Home from "./pages/Home";
import Reviews from "./components/Reviews";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Courses from "./pages/Courses";
function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/theory-results" element={<TheoryResults />} />
        <Route path="/theory-quiz" element={<TheoryQuiz />} />
        <Route path="/theory-lessons" element={<TheoryLessons />} />
        <Route path="/theory-lessons/:id" element={<TheoryLessonDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/why-us" element={<WhyChooseUs />} />
        <Route path="/faq" element={<FAQ />} />
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
