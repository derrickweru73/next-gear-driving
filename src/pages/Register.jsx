import { Link } from "react-router-dom";
import { CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl">
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
              Start Your
              <br />
              Driving Journey
              <br />
              Today.
            </h2>

            <p className="text-slate-300 text-lg leading-8">
              Register as a student to access online driving lessons, theory
              quizzes, lesson booking, progress tracking and more.
            </p>
          </div>

          {/* Right Section */}
          <CardContent className="p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-slate-900">
                Create Account
              </h2>

              <p className="text-slate-500 mt-2 mb-8">
                Fill in your details below to get started.
              </p>

              <form className="space-y-5">
                <div>
                  <Label>Full Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Email Address</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Phone Number</Label>
                  <Input type="tel" placeholder="07XXXXXXXX" className="mt-2" />
                </div>

                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Create a password"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    className="mt-2"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />

                  <p className="text-sm text-slate-600">
                    I agree to the Terms & Conditions and Privacy Policy.
                  </p>
                </div>

                <Button className="w-full h-11 bg-green-600 hover:bg-green-700">
                  Create Account
                </Button>
              </form>

              <div className="mt-8 text-center text-sm">
                Already have an account?
                <Link
                  to="/login"
                  className="ml-2 font-semibold text-blue-900 hover:text-yellow-500"
                >
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Register;
