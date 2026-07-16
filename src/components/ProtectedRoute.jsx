import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const paymentCompleted = localStorage.getItem("paymentCompleted") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Prevent access to dashboard until payment is completed
  if (!paymentCompleted) {
    return <Navigate to="/enrollment" replace />;
  }

  return children;
};

export default ProtectedRoute;
