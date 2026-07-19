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
import PendingEnrollment from "./pages/PendingEnrollment";
import AdminBookings from "./pages/AdminBookingPage";
import AdminPayments from "./pages/AdminPayments";
import AdminPracticalLessons from "./pages/AdminPracticalLesson";
import StudentProfile from "./pages/StudentProfile";
import StudentPayment from "./pages/StudentPayment";
import StudentNotification from "./pages/StudentNotifications";
import AdminNotification from "./pages/AdminNotification";
import BookingSuccess from "./pages/BookingSuccess";
import Certificate from "./pages/Certificate";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
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
        <Route path="/pending-enrollment" element={<PendingEnrollment />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/practical-lessons" element={<AdminPracticalLessons />} />
        <Route path="/student-notifications" element={<StudentNotification/>} />
        <Route path="/admin-notifications" element={<AdminNotification/>} />
        <Route path="/booking-success" element={<BookingSuccess/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard/>} />

   


         <Route path="/student-profile" element={<ProtectedRoute><StudentProfile/></ProtectedRoute> } />
         <Route path="/student-dashboard" element={<ProtectedRoute><StudentDashboard/></ProtectedRoute> } />
         <Route path="/student-payments" element={<ProtectedRoute><StudentPayment/></ProtectedRoute> } />
         
         
        
       
        
      </Routes>
     </>
  );
}

export default App;
