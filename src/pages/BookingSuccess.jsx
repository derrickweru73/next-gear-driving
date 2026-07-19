import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const BookingSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6F2]">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg text-center">
        <CheckCircle className="mx-auto text-green-600 mb-6" size={80} />

        <h1 className="text-3xl font-bold text-[#0F172A]">
          Lesson Booked Successfully!
        </h1>

        <p className="mt-4 text-gray-600">
          Your practical lesson booking has been submitted successfully.
        </p>

        <p className="mt-2 text-gray-600">
          Please wait for the administrator to approve and schedule your lesson.
          You will receive a notification once it has been confirmed.
        </p>

        <Link
          to="/student-dashboard"
          className="inline-block mt-8 bg-[#F97316] text-white px-8 py-3 rounded-xl"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
