import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CarFront } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-5xl overflow-hidden shadow-2xl rounded-3xl">
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
              Learn.
              <br />
              Practice.
              <br />
              Drive with Confidence.
            </h2>

            <p className="text-slate-300 text-lg">
              Access your driving courses, book practical lessons, track your
              progress and become a confident driver.
            </p>
          </div>

          {/* Right Section */}

          <CardContent className="p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-slate-900">
                Welcome Back
              </h2>

              <p className="text-slate-500 mt-2 mb-8">
                Login to continue your driving journey.
              </p>

              <form className="space-y-6">
                <div>
                  <Label>Email Address</Label>

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Password</Label>

                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="mt-2"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-blue-900 hover:text-yellow-500"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 h-11">
                  Login
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
