import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const EnrollmentRoute = ({ children }) => {
  const { user } = useAuth();

  console.log(user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === "student" && user.enrolled === false) {
    return <Navigate to="/enrollment" />;
  }

  return children;
};

export default EnrollmentRoute;
