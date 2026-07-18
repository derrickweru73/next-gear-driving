import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  CreditCard,
  Edit,
  Save,
  ArrowLeft,

} from "lucide-react";

const StudentProfile = () => {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    studentId: "",
    course: "",
    transmission: "",
  });

  const [payment, setPayment] = useState(null);

  useEffect(() => {
    if (!user) return;

    const enrollment =
      JSON.parse(localStorage.getItem("studentEnrollment")) || {};

    const payments = JSON.parse(localStorage.getItem("payments")) || [];

    const studentPayment = payments.find((item) => item.email === user.email);

    setPayment(studentPayment || null);

    setProfile({
      fullName: enrollment.fullName || user.fullName || "",
      email: enrollment.email || user.email || "",
      phone: enrollment.phone || user.phone || "",
      studentId:
        enrollment.studentId || `NG-${String(user.id || 1).padStart(4, "0")}`,
      course: enrollment.course || "",
      transmission: enrollment.transmission || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const enrollment =
      JSON.parse(localStorage.getItem("studentEnrollment")) || {};

    localStorage.setItem(
      "studentEnrollment",
      JSON.stringify({
        ...enrollment,
        ...profile,
      }),
    );

    updateUser({
      ...user,
      fullName: profile.fullName,
      phone: profile.phone,
    });

    setEditing(false);

    alert("Profile updated successfully.");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-5">
            <div className="w-24 h-24 rounded-full bg-[#0F172A] flex items-center justify-center">
              <User className="text-[#F97316]" size={45} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-[#0F172A]">
                {profile.fullName}
              </h1>

              <p className="text-gray-500">Student Profile</p>

              <p className="text-[#F97316] font-semibold">
                {profile.studentId}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            {editing ? (
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >
                <Save size={18} />
                Save
              </button>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="bg-[#F97316] text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >
                <Edit size={18} />
                Edit
              </button>
            )}

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <ArrowLeft size={18} />
              Back
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-5">Personal Information</h2>

            <label className="font-semibold">Full Name</label>

            <input
              className="w-full border rounded-lg p-3 mt-2 mb-4"
              name="fullName"
              value={profile.fullName}
              disabled={!editing}
              onChange={handleChange}
            />

            <label className="font-semibold flex items-center gap-2">
              <Mail size={18} />
              Email
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-2 mb-4 bg-gray-100"
              value={profile.email}
              disabled
            />

            <label className="font-semibold flex items-center gap-2">
              <Phone size={18} />
              Phone
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-2"
              name="phone"
              value={profile.phone}
              disabled={!editing}
              onChange={handleChange}
            />
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-5">Course Information</h2>

            <label className="font-semibold">Course</label>

            <input
              className="w-full border rounded-lg p-3 mt-2 mb-4 bg-gray-100"
              value={profile.course}
              disabled
            />

            <label className="font-semibold">Transmission</label>

            <input
              className="w-full border rounded-lg p-3 mt-2 mb-4 bg-gray-100"
              value={profile.transmission}
              disabled
            />

            <div className="mt-6 border rounded-xl p-5 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="text-[#F97316]" />
                <h3 className="font-bold">Payment Information</h3>
              </div>

              <p>
                <strong>Status:</strong> {payment ? payment.status : "Pending"}
              </p>

              <p className="mt-2">
                <strong>Amount:</strong> KSh {payment?.amount || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
