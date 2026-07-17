import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const EnrollmentRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === "student" && user.enrolled === false) {
    return <Navigate to="/enroll" />;
  }

  return children;
};

export default EnrollmentRoute;
