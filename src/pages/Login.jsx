import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginStudent } from "@/services/AuthApi.js";

const Login = () => {
  const navigate = useNavigate();

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
      const student = await loginStudent(formData.email, formData.password);

      if (!student) {
        alert("Invalid email or password.");
        setLoading(false);
        return;
      }

      localStorage.setItem("student", JSON.stringify(student));

      alert(`Welcome ${student.fullName}!`);

      navigate("/student-dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Section */}
          <div className="hidden md:flex flex-col justify-center bg-blue-900 text-white p-10">
            <div className="flex items-center gap-3 mb-8">
              <CarFront className="h-10 w-10 text-yellow-400" />

              <div>
                <h1 className="text-3xl font-bold">Next Gear</h1>

                <p className="text-yellow-400">Driving LMS</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Welcome
              <br />
              Back.
            </h2>

            <p className="text-slate-300 text-lg leading-8">
              Login to continue learning, book driving lessons, take theory
              quizzes and track your driving progress.
            </p>
          </div>

          {/* Right Section */}
          <CardContent className="p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-slate-900">Login</h2>

              <p className="text-slate-500 mt-2 mb-8">
                Sign in to your account.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
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
                  <Label>Password</Label>

                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </form>

              <div className="mt-8 text-center text-sm">
                Don't have an account?
                <Link
                  to="/register"
                  className="ml-2 font-semibold text-blue-900 hover:text-yellow-500"
                >
                  Register
                </Link>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Login;
