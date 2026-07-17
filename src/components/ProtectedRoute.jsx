 import { Navigate } from "react-router-dom";
 import { useAuth } from "@/context/AuthContext";

 const ProtectedRoute = ({ children }) => {
   const { user } = useAuth();

   // Not logged in
   if (!user) {
     return <Navigate to="/login" replace />;
   }

   // Student not yet approved
   if (user.role === "student" && !user.enrolled) {
     return <Navigate to="/enrollment" replace />;
   }

   return children;
 };

 export default ProtectedRoute;
