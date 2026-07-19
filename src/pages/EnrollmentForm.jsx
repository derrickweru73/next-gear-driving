import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
const EnrollmentForm = () => {
  const navigate = useNavigate();
   const { user } = useAuth();
   console.log(user);

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("studentEnrollment");

    return saved
      ? JSON.parse(saved)
      : {
          fullName: "",
          nationalId: "",
          dateOfBirth: "",
          gender: "",
          phone: "",
          email: "",
          address: "",
          course: "",
          transmission: "",
          emergencyContact: "",
          emergencyPhone: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("studentEnrollment", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = (e) => {
      e.preventDefault();

        const enrollment = {
          id: Date.now(),
          userId: user?.id || user?.userId,
          ...formData,
          enrolled: false,
          status: "Pending",
        };

      // Save current enrollment
      localStorage.setItem("studentEnrollment", JSON.stringify(enrollment));

      // Save to pending enrollments list
      const pending =
        JSON.parse(localStorage.getItem("pendingEnrollments")) || [];

      pending.push(enrollment);

      localStorage.setItem("pendingEnrollments", JSON.stringify(pending));

      navigate("/payment");
    };
  return (
    <div className="min-h-screen bg-[#F8F6F2] py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          Student Enrollment
        </h1>

        <p className="text-gray-600 mt-2">
          Complete your enrollment before accessing lessons.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 mt-10"
        >
          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">National ID / Passport</label>
            <input
              type="text"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold">Residential Address</label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Driving Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            >
              <option value="">Select Course</option>
              <option>Class B (Private Car)</option>
              <option>Class A (Motorcycle)</option>
              <option>Class C (Commercial)</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Transmission</label>
            <select
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            >
              <option value="">Select</option>
              <option>Manual</option>
              <option>Automatic</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Emergency Contact</label>
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Emergency Phone</label>
            <input
              type="tel"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-[#F97316] hover:bg-orange-600 text-white py-4 rounded-xl font-semibold"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
