import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const EnrollmentRoute = ({ children }) => {
  const { user } = useAuth();

  console.log("user:", user);
  console.log("Enrollment:", enrollment);

  if (!user) {
    return <Navigate to="/login" />;
  }

   const enrollment = JSON.parse(localStorage.getItem("studentEnrollment"));

   if (user.role === "student") {
     if (!enrollment) {
       return <Navigate to="/enrollment" replace />;
     }

     if (!user.enrolled) {
       return <Navigate to="/pending-enrollment" replace />;
     }
   }

  return children;
};

export default EnrollmentRoute;
