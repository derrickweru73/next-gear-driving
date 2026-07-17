import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/services/AuthApi";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
     e.preventDefault();

     if (!formData.email || !formData.password) {
       alert("Please fill in all fields.");
       return;
     }

     setLoading(true);

     try {
       // Login user
       const user = await loginUser(formData.email, formData.password);

       if (!user) {
         alert("Invalid email or password.");
         return;
       }

       login(user);

       alert(`Welcome back ${user.fullName}!`);

       // Redirect based on role
       if (user.role === "admin") {
         navigate("/admin-dashboard");
       } else if (user.role === "instructor") {
         navigate("/instructor-dashboard");
       } else if (user.role === "student") {
         if (user.enrolled) {
           navigate("/student-dashboard");
         } else {
           alert("Your enrollment is pending admin approval.");
           navigate("/pending-enrollment");
         }
       } else {
         alert("Unknown account type.");
       }
     } catch (error) {
       console.error(error);
       alert("Login failed. Please try again.");
     } finally {
       setLoading(false);
     }
   };

  return (
    <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl border-0">
        <CardContent className="p-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#0F172A] flex items-center justify-center mb-4">
              <CarFront className="w-8 h-8 text-[#F97316]" />
            </div>

            <h1 className="text-3xl font-bold text-[#0F172A]">Next Gear</h1>

            <p className="text-[#F97316] font-medium">Driving LMS</p>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[#0F172A]">Welcome Back</h2>

            <p className="text-gray-600 mt-2">
              Login to continue your driving journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label>Email Address</Label>

              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2"
              />
            </div>

            <div>
              <Label>Password</Label>

              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white h-12 rounded-xl"
            >
              {loading ? "Signing In..." : "Login"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="ml-2 text-[#F97316] font-semibold hover:underline"
            >
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
