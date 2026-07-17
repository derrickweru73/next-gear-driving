import PracticalLessonDetails from "./pages/PracticalLessonDetails";
import PracticalLessons from "./pages/PracticalLesson";
import TheoryLessonDetails from "./pages/TheoryLessonsDetails";
import TheoryResults from "./pages/TheoryResults";
import TheoryQuiz from "./pages/TheoryQuiz";
import BookingForm from "./pages/BookingForm";
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
import EnrollmentForm from "./pages/EnrollmentForm";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import AdminDashboard from "./pages/AdminDashboard";
import ManageStudents from "./pages/ManageStudents";
import AdminTheoryLessons from "./pages/AdminTheoryLessons";
import EnrollmentRoute from "./pages/EnrollmentRoute";
import PendingEnrollment from "./pages/PendingEnrollment";
function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/booking-lesson/:id" element={<BookingForm />} />
        <Route path="/practical-lessons/:id" element={<PracticalLessonDetails />} />
        <Route path="/practical-lessons" element={<PracticalLessons />} />
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
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<ManageStudents />} />
        <Route path="/enrollment" element={<EnrollmentForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/admin/theory-lessons" element={<AdminTheoryLessons />} />
        <Route path="/pending-lessons" element={<PendingEnrollment />} />
  


         <Route path="/student-dashboard" element={<EnrollmentRoute><StudentDashboard/></EnrollmentRoute> } />
         
         
        
       
        
      </Routes>
     </>
  );
}

export default App;
