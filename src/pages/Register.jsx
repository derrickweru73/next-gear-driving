import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarFront, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/services/AuthApi";
import { useAuth } from "@/context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
       const newUser = {
         fullName: formData.fullName,
         email: formData.email,
         phone: formData.phone,
         password: formData.password,
         role: "student",

         enrolled: false,
         bookingCompleted: false,
         paymentCompleted: false,
         activity: ["Account created"],
       };

       const user = await registerUser(newUser);

       // Save registered students for Admin Dashboard
        
       

       alert("Registration successful!");

       navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F6F2] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl border-0">
        <CardContent className="p-8">
          {/* Logo */}

          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#0F172A] flex items-center justify-center mb-4">
              <CarFront className="w-8 h-8 text-[#F97316]" />
            </div>

            <h1 className="text-3xl font-bold text-[#0F172A]">Next Gear</h1>

            <p className="text-[#F97316] font-medium">Driving LMS</p>
          </div>

          {/* Heading */}

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Create Account
            </h2>

            <p className="text-gray-600 mt-2">
              Join Next Gear Driving LMS today.
            </p>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label>Full Name</Label>

              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Email Address</Label>

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Phone Number</Label>

              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="07XXXXXXXX"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Password</Label>

              <div className="relative mt-2">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  className="pr-12"
                />

                <button
                  type="button"
                  className="absolute right-4 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <Label>Confirm Password</Label>

              <div className="relative mt-2">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="pr-12"
                />

                <button
                  type="button"
                  className="absolute right-4 top-3 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F97316] hover:bg-orange-600 text-white h-12 rounded-xl"
            >
              {loading ? "Creating Account..." : "Register"}
            </Button>
          </form>

          <div className="text-center mt-8 text-sm text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-[#F97316] font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Register;
